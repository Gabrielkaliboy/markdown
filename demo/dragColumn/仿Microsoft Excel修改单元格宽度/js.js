function Table(Id, span) {
    this.span = undefined == span ? 3 : span;
    this.cursor = 'e-resize';        
    this.isStrict = document.compatMode == 'CSS1Compat';
    this.data = { ex: 0, w: 0, elm: null, drag: false, ow: 0, oleft: 0 };
    this.table = this.$(Id);    
    this.init();
}
Table.mousemove = function (instance, e) { if (e.clientX > instance.data.oleft + instance.data.ow) instance.splitLine.style.left = e.clientX + 'px'; }
Table.mouseup = function (instance, e) {
    instance.splitLine.style.display = 'none';
    instance.forbidSelect();
    var w = instance.data.w + e.clientX - instance.data.ex, ow = instance.data.ow;
    if (w < ow) w = ow;
    instance.data.drag = false;
    instance.data.elm.style.width = w + 'px';
    instance.DocumentUp();
    instance.DocumentMove();
}
Table.prototype.$ = function (Id) { return document.getElementById(Id); }
Table.prototype.$s = function (obj, tag) { return obj.getElementsByTagName(tag); }
Table.prototype.position = function (o) { var p = new Object(); p.x = o.offsetLeft; p.y = o.offsetTop; while (o = o.offsetParent) { p.x += o.offsetLeft; p.y += o.offsetTop; } return p; }
Table.prototype.DocumentMove = function (add) {
    if (add) {
        if (document.addEventListener) document.addEventListener('mousemove', this.mousemoveFunction, false);
        else document.attachEvent('onmousemove', this.mousemoveFunction);
    }
    else {            
        if (document.removeEventListener) document.removeEventListener('mousemove', this.mousemoveFunction, false);
        else document.detachEvent('onmousemove', this.mousemoveFunction);
    }
}
Table.prototype.DocumentUp = function (add) {
    if (add) {
        if (document.addEventListener) document.addEventListener('mouseup', this.mouseupFunction, false);
        else document.attachEvent('onmouseup', this.mouseupFunction);
    }
    else {
        if (document.removeEventListener) document.removeEventListener('mouseup', this.mouseupFunction, false);
        else document.detachEvent('onmouseup', this.mouseupFunction);
    }
}
Table.prototype.forbidSelect = function (forbid) {//修改单元格长度时不允许选择，否则允许选择
    if (document.all) this.table.onselectstart = function () { return !forbid; }
    else {
        if (forbid) this.table.style.cssText += '-moz-user-select:none';
        else this.table.style.cssText = this.table.style.cssText.replace(/-moz-user-select\s*:\s*none/i, '');
    }
}
Table.prototype.init = function () {
    this.mousemoveFunction = (function (me) { return function (e) { Table.mousemove(me, e || window.event); } })(this);
    this.mouseupFunction = (function (me) { return function (e) { Table.mouseup(me, e || window.event); } })(this);
    this.splitLine = document.createElement('div');
    this.splitLine.style.width = '2px';
    this.splitLine.style.overFlow = 'hidden';
    this.splitLine.style.cursor = this.cursor;
    this.splitLine.innerHTML = '&nbsp;'
    this.splitLine.style.position = 'absolute';
    this.splitLine.style.display = 'none';
    this.splitLine.style.backgroundColor = 'red';
    this.splitLine.style.height = this.table.offsetHeight + 'px';
    this.splitLine.style.top = this.position(this.table).y + 'px';
    document.body.appendChild(this.splitLine);
    var tr = this.$s(this.table, 'tr');
    if (tr.length > 0) { //初始化页头的移动事件
        var tds = tr[0].cells;
        for (var i = 0; i < tds.length; i++) {
            tds[i].innerHTML = '<div style="width:' + tds[i].offsetWidth + 'px" ow="' + tds[i].offsetWidth + '">' + tds[i].innerHTML + '</div>';
            tds[i].onmousemove = (function (me) {
                return function (e) {
                    if (me.data.drag) return false;
                    e = e || window.event;
                    var p = me.position(this), bodyScrollLeft = me.isStrict ? document.documentElement.scrollLeft : document.body.scrollLeft;
                    if (Math.abs(e.clientX - p.x - this.offsetWidth) <= (me.span + bodyScrollLeft))
                        this.firstChild.style.cursor = me.cursor;
                    else this.firstChild.style.cursor = 'default';
                }
            })(this);
            tds[i].onmousedown = (function (me) {
                return function (e) {
                    e = e || window.event;
                    var o = e.srcElement || e.target;
                    if (o.style.cursor == me.cursor) {
                        me.forbidSelect(true);
                        me.data.elm = o;
                        me.data.drag = true;
                        me.data.ex = e.clientX;
                        me.data.w = parseInt(o.style.width);
                        me.data.oleft = me.position(o.parentNode).x;
                        me.data.ow = parseInt(o.getAttribute('ow'), 10);
                        me.splitLine.style.left = me.data.ex + 'px';
                        me.splitLine.style.display = 'block';
                        me.DocumentMove(true);
                        me.DocumentUp(true);
                    }
                }
            })(this)
        }
    }
}