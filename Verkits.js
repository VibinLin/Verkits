/*
 * Name: Verkits                                      
 * Description: The kits for verification using JQuery.
 * Create: 2015/09/09
 * Modify: 2015/09/14                                  
 * Author: Vibin
 * Version: 1.0
 */


/*
 * ---------------------------------------------------------------
 * String扩展验证方法
 * --------------------------------------------------------------- 
 */

/*
 * @summary 去除字符串的前后空格
 * @return {String} 去除前后空格后的字符串
 * @example  " dd dd ".trim()  // 返回: "dd dd"
 */
String.prototype.trim = function (direct) {
    return this.replace(new RegExp("(^[\\s　]+)|([\\s　]+$)", "g"), "");
};


/*
 * @summary 判断是否为Null、undefined或者""
 * @return {Boolean} 
 */
String.prototype.isNull = function () {
    return this == null || this == '';
};

/*
 * @summary 判断是否为Null、undefined或者""或者空格
 * @return {Boolean} 
 */
String.prototype.isBlank = function () {
    return this == null || jQuery.trim(this) == '';
};

/*
* @summary 判断是否以子串开头
* @param  {String} str 被判断的子串
* @return {Boolean} 以子串开头则返回 true，否则返回false
*/
String.prototype.isStartWith = function (str) {
    if (this == str || str == '') return true;
    return this.length > str.length && this.slice(0, str.length) == str;
};

/*
* @summary 判断是否以子串结尾
* @param  {String} str 被判断的子串
* @return {String} 以子串结尾则返回 true，否则返回false
*/
String.prototype.isEndWith = function (str) {
    if (this == str || str == '') return true;
    return this.length > str.length && this.slice(0 - str.length) == str;
};

/*
 * @summary 判断是否包含子串
 * @param  {String} str 被判断的子串
 * @return {String} 包含子串则返回 true，否则返回false
 */
String.prototype.isInclude = function (str) {
    return (this.indexOf(str) > -1);
};

//验证数字(正负整数0)：
String.prototype.isNumber = function () {
    return /^[\+-]?[0-9]+$/.test(this);
};
//验证n位的数字：^\d{n}$
String.prototype.isNDigitsNumber = function (n) {
    return new RegExp("^\d{" + n + "}$").test(this);
};
//验证至少n位数字：^\d{n,}$
String.prototype.isMoreNDigitsNumber = function (n) {
    return new RegExp("^\d{" + n + ",}$").test(this);
};
//验证m-n位的数字：^\d{m,n}$
String.prototype.isM2NDigitsNumber = function (m, n) {
    if (m <= n) {
        return new RegExp("^\d{" + m + "," + n + "}$").test(this);
    } else return false;
};

//验证n位数（数学用语）,开头的0去掉
String.prototype.isN_DigitNumber = function (n) {
    return new RegExp("^0*\d{" + n + "}$").test(this);
};
//验证至少n位数（数学用语）的数字：^\d{n,}$ ,开头的0去掉
String.prototype.isMoreN_DigitNumber = function (n) {
    return new RegExp("^0*\d{" + n + ",}$").test(this);
};
//验证m-n位数（数学用语）的数字：^\d{n,}$ ,开头的0去掉
String.prototype.isM2NDigitNumber = function (m, n) {
    if (m <= n) {
        return new RegExp("^0*\d{" + m + "," + n + "}$").test(this);
    } else return false;
};
//验证零和非零开头的数字：^(0|[1-9][0-9]*)$
String.prototype.isStrictNumber = function () {
    return /^[\+-]?(0|[1-9][0-9]*)$/.test(this);
};
//验证有n位小数的正实数：^[0-9]+(.[0-9]{2})?$
String.prototype.hasNDecimalPlaces = function (n) {
    return new RegExp("^[0-9]+(.[0-9]{"+n+"})?$").test(this);
};
//验证至少有n位小数的正实数：^[0-9]+(.[0-9]{2,})?$
String.prototype.hasMoreNDecimalPlaces = function (n) {
    return new RegExp("^[0-9]+(.[0-9]{" + n + ",})?$").test(this);
};
//验证有m-n位小数的正实数：^[0-9]+(.[0-9]{1,3})?$
String.prototype.hasM2NDecimalPlaces = function (m, n) {
    if (m <= n) {
        return new RegExp("^[0-9]+(.[0-9]{"+m+","+n+"})?$").test(this);
    } else return false;
};

//验证正整数：^\+?[1-9][0-9]*$
String.prototype.isPositiveInteger = function () {
    return /^\+?[1-9][0-9]*$/.test(this);
};
//验证负整数：^\-[1-9][0-9]*$
String.prototype.isNegtiveInteger = function () {
    return /^\-[1-9][0-9]*$/.test(this);
};
//验证非正整数（正整数 + 0） ^((-\d+)|(0+))$
String.prototype.isNonPositiveInteger = function () {
    return /^((-\d+)|(0+))$/.test(this);
};
//验证非负整数（正整数 + 0） ^\d+$
String.prototype.isNonNegativeInteger = function () {
    return /^\d+$/.test(this);
};
//验证长度为N的字符（除换行符以外的字符）：^.{n}$ 
String.prototype.isNLength = function (n) {
    return /^.{n}$/.test(this);
};
//验证长度至少为N的字符（除换行符以外的字符）：^.{n,}$ 
String.prototype.isMoreNLength = function (n) {
    return new RegExp("^.{" + n + ",}$").test(this);
};
//验证长度为M-N的字符（除换行符以外的字符）：^.{m,n}$ 
String.prototype.isM2NLength = function (m,n) {
    if (m <= n) {
        return new RegExp("^.{" + m + "," + n + "}$").test(this);
    } else return false;
};
//验证由26个英文字母组成的字符串：^[A-Za-z]+$
String.prototype.isLetters = function () {
    return /^[A-Za-z]+$/.test(this);
};
//验证由26个大写英文字母组成的字符串：^[A-Z]+$
String.prototype.isUpperLetters = function () {
    return /^[A-Z]+$/.test(this);
};
//验证由26个小写英文字母组成的字符串：^[a-z]+$
String.prototype.isLowerLetters = function () {
    return /^[a-z]+$/.test(this);
};
//验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
String.prototype.isNumbersAndLetters = function () {
    return /^[A-Za-z0-9]+$/.test(this);
};
//验证由数字、26个英文字母或者下划线组成的字符串：^\w+$
String.prototype.isNumbersAndLettersAndUnderline = function () {
    return /^\w+$/.test(this);
};
//验证一般注册账号的格式，由数字、26个英文字母或者下划线、减号组成的字符串：
//m至少要传1以上否则返回false
String.prototype.isAccount = function (m, n) {
    if (arguments.length <= 0) {
        m = "0"; n = "";
    }
    else if (arguments.length == 1) {
        if (m <= 0) return false;
        m = m - 1; n = "";
    }
    else {
        if (m <= 0) return false;
        if (m > n) { n = ""; }//如果传入的m比n大，默认n无效即个数上不封顶
        else { n = n - 1; }
        m = m - 1; b
    }
    return new RegExp("^[A-Za-z]+[A-Za-z0-9_-]{" + m + "," + n + "}$").test(this);

};
//验证用户密码:
//密码由6-16个字符组成，区分大小写（不能是9位以下纯数字，不能包含空格）。是否可加符号。
String.prototype.isPassword = function (m, n, floorNum,canIncludeSymbols) {
    if (arguments.length <= 0) {
        m = "0"; n = "";
    }
    else if (arguments.length == 1) {
        if (m <= 0) return false;
        m = m - 1; n = "";
    }
    else {
        if (m <= 0) return false;
        if (m > n) { n = ""; }//如果传入的m比n大，默认n无效即个数上不封顶
        else { n = n - 1; }
        m = m - 1;
    }
    return new RegExp("^[0-9_a-zA-Z]{" + m + "," + n + "}$").test(this);

};
//验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+
//验证汉字：^[\u4e00-\u9fa5],{0,}$
//验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
//验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
//验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
//验证身份证号（15位或18位数字）：^\d{15}|\d{}18$
//验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
//验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。
//整数：^-?\d+$
//非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$
//正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
//非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
//负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
//浮点数 ^(-?\d+)(\.\d+)?
/* 常见需求匹配 */

/*
* @summary 检查字符串是否为URL地址
* @return {Boolean} 
*/
String.prototype.isUrl = function () {
    return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this);
};

/*
* @summary 检查字符串是否为手机号码（支持+86）
* @return {Boolean} 
* @example (+86)12340000000 +8612340000000 8612340000000 12340000000 true
*/
String.prototype.isMobilePhone = function () {
    return /^((\+?86)|(\(\+86\)))?1\d{10}$/.test(this);
};

/*
* @summary 检查字符串是否为固定电话（支持+86）
* @return {Boolean} 
* @example (+86)020-8888888 +86020-8888888 86020-8888888 020-8888888 true
*           (86)020-8888888 020-888888 020-888888888 false
*/
String.prototype.isTelephone = function () {
    return /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(this);
};

/*
* @summary 检查字符串是否为固定电话或手机号码（支持+86）
* @return {Boolean} 
*/
String.prototype.isPhone = function () {
    return this.isMobilePhone() || this.isTelephone();
};

/*
* @summary 检查字符串是否为QQ 根据当前腾讯开放的情况封顶长度为10位
* @return {Boolean} 
*/
String.prototype.isQQ = function () {
    return /^[1-9][0-9]{4,9}$/.test(this);
};
/*
* @summary 检查字符串是否为身份证号码
* @return {Boolean} 
*/
String.prototype.isIDCardNumber = function () {
    return /(^\d{15}$)|(^\d{17}(?:\d|x|X)$)/.test(this);
};

/*
* 检查字符串是否为Email地址
* @return {Boolean} 
*/
String.prototype.isEmail = function () {
    return new RegExp("^[a-z0-9][a-z0-9\\-_.]*[a-z0-9]+@(([a-z0-9]([a-z0-9]*[-_]?[a-z0-9]+)+\\.[a-z0-9]+(\\.[a-z0-9]+)?)|(([1-9]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))\\.(([\\d]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))\\.){2}([1-9]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))))$", 'gi').test(this);
};
/*
 * 检查字符串是否为中国邮政编码
 * @return {Boolean} 
 */
String.prototype.isPostCode = function () {
    return /^[1-9]\d{5}$/.test(this);
};