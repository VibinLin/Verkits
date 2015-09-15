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
 * String��չ��֤����
 * --------------------------------------------------------------- 
 */

/*
 * @summary ȥ���ַ�����ǰ��ո�
 * @return {String} ȥ��ǰ��ո����ַ���
 * @example  " dd dd ".trim()  // ����: "dd dd"
 */
String.prototype.trim = function (direct) {
    return this.replace(new RegExp("(^[\\s��]+)|([\\s��]+$)", "g"), "");
};


/*
 * @summary �ж��Ƿ�ΪNull��undefined����""
 * @return {Boolean} 
 */
String.prototype.isNull = function () {
    return this == null || this == '';
};

/*
 * @summary �ж��Ƿ�ΪNull��undefined����""���߿ո�
 * @return {Boolean} 
 */
String.prototype.isBlank = function () {
    return this == null || jQuery.trim(this) == '';
};

/*
* @summary �ж��Ƿ����Ӵ���ͷ
* @param  {String} str ���жϵ��Ӵ�
* @return {Boolean} ���Ӵ���ͷ�򷵻� true�����򷵻�false
*/
String.prototype.isStartWith = function (str) {
    if (this == str || str == '') return true;
    return this.length > str.length && this.slice(0, str.length) == str;
};

/*
* @summary �ж��Ƿ����Ӵ���β
* @param  {String} str ���жϵ��Ӵ�
* @return {String} ���Ӵ���β�򷵻� true�����򷵻�false
*/
String.prototype.isEndWith = function (str) {
    if (this == str || str == '') return true;
    return this.length > str.length && this.slice(0 - str.length) == str;
};

/*
 * @summary �ж��Ƿ�����Ӵ�
 * @param  {String} str ���жϵ��Ӵ�
 * @return {String} �����Ӵ��򷵻� true�����򷵻�false
 */
String.prototype.isInclude = function (str) {
    return (this.indexOf(str) > -1);
};

//��֤����(��������0)��
String.prototype.isNumber = function () {
    return /^[\+-]?[0-9]+$/.test(this);
};
//��֤nλ�����֣�^\d{n}$
String.prototype.isNDigitsNumber = function (n) {
    return new RegExp("^\d{" + n + "}$").test(this);
};
//��֤����nλ���֣�^\d{n,}$
String.prototype.isMoreNDigitsNumber = function (n) {
    return new RegExp("^\d{" + n + ",}$").test(this);
};
//��֤m-nλ�����֣�^\d{m,n}$
String.prototype.isM2NDigitsNumber = function (m, n) {
    if (m <= n) {
        return new RegExp("^\d{" + m + "," + n + "}$").test(this);
    } else return false;
};

//��֤nλ������ѧ���,��ͷ��0ȥ��
String.prototype.isN_DigitNumber = function (n) {
    return new RegExp("^0*\d{" + n + "}$").test(this);
};
//��֤����nλ������ѧ��������֣�^\d{n,}$ ,��ͷ��0ȥ��
String.prototype.isMoreN_DigitNumber = function (n) {
    return new RegExp("^0*\d{" + n + ",}$").test(this);
};
//��֤m-nλ������ѧ��������֣�^\d{n,}$ ,��ͷ��0ȥ��
String.prototype.isM2NDigitNumber = function (m, n) {
    if (m <= n) {
        return new RegExp("^0*\d{" + m + "," + n + "}$").test(this);
    } else return false;
};
//��֤��ͷ��㿪ͷ�����֣�^(0|[1-9][0-9]*)$
String.prototype.isStrictNumber = function () {
    return /^[\+-]?(0|[1-9][0-9]*)$/.test(this);
};
//��֤��nλС������ʵ����^[0-9]+(.[0-9]{2})?$
String.prototype.hasNDecimalPlaces = function (n) {
    return new RegExp("^[0-9]+(.[0-9]{"+n+"})?$").test(this);
};
//��֤������nλС������ʵ����^[0-9]+(.[0-9]{2,})?$
String.prototype.hasMoreNDecimalPlaces = function (n) {
    return new RegExp("^[0-9]+(.[0-9]{" + n + ",})?$").test(this);
};
//��֤��m-nλС������ʵ����^[0-9]+(.[0-9]{1,3})?$
String.prototype.hasM2NDecimalPlaces = function (m, n) {
    if (m <= n) {
        return new RegExp("^[0-9]+(.[0-9]{"+m+","+n+"})?$").test(this);
    } else return false;
};

//��֤��������^\+?[1-9][0-9]*$
String.prototype.isPositiveInteger = function () {
    return /^\+?[1-9][0-9]*$/.test(this);
};
//��֤��������^\-[1-9][0-9]*$
String.prototype.isNegtiveInteger = function () {
    return /^\-[1-9][0-9]*$/.test(this);
};
//��֤���������������� + 0�� ^((-\d+)|(0+))$
String.prototype.isNonPositiveInteger = function () {
    return /^((-\d+)|(0+))$/.test(this);
};
//��֤�Ǹ������������� + 0�� ^\d+$
String.prototype.isNonNegativeInteger = function () {
    return /^\d+$/.test(this);
};
//��֤����ΪN���ַ��������з�������ַ�����^.{n}$ 
String.prototype.isNLength = function (n) {
    return /^.{n}$/.test(this);
};
//��֤��������ΪN���ַ��������з�������ַ�����^.{n,}$ 
String.prototype.isMoreNLength = function (n) {
    return new RegExp("^.{" + n + ",}$").test(this);
};
//��֤����ΪM-N���ַ��������з�������ַ�����^.{m,n}$ 
String.prototype.isM2NLength = function (m,n) {
    if (m <= n) {
        return new RegExp("^.{" + m + "," + n + "}$").test(this);
    } else return false;
};
//��֤��26��Ӣ����ĸ��ɵ��ַ�����^[A-Za-z]+$
String.prototype.isLetters = function () {
    return /^[A-Za-z]+$/.test(this);
};
//��֤��26����дӢ����ĸ��ɵ��ַ�����^[A-Z]+$
String.prototype.isUpperLetters = function () {
    return /^[A-Z]+$/.test(this);
};
//��֤��26��СдӢ����ĸ��ɵ��ַ�����^[a-z]+$
String.prototype.isLowerLetters = function () {
    return /^[a-z]+$/.test(this);
};
//��֤�����ֺ�26��Ӣ����ĸ��ɵ��ַ�����^[A-Za-z0-9]+$
String.prototype.isNumbersAndLetters = function () {
    return /^[A-Za-z0-9]+$/.test(this);
};
//��֤�����֡�26��Ӣ����ĸ�����»�����ɵ��ַ�����^\w+$
String.prototype.isNumbersAndLettersAndUnderline = function () {
    return /^\w+$/.test(this);
};
//��֤һ��ע���˺ŵĸ�ʽ�������֡�26��Ӣ����ĸ�����»��ߡ�������ɵ��ַ�����
//m����Ҫ��1���Ϸ��򷵻�false
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
        if (m > n) { n = ""; }//��������m��n��Ĭ��n��Ч�������ϲ��ⶥ
        else { n = n - 1; }
        m = m - 1; b
    }
    return new RegExp("^[A-Za-z]+[A-Za-z0-9_-]{" + m + "," + n + "}$").test(this);

};
//��֤�û�����:
//������6-16���ַ���ɣ����ִ�Сд��������9λ���´����֣����ܰ����ո񣩡��Ƿ�ɼӷ��š�
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
        if (m > n) { n = ""; }//��������m��n��Ĭ��n��Ч�������ϲ��ⶥ
        else { n = n - 1; }
        m = m - 1;
    }
    return new RegExp("^[0-9_a-zA-Z]{" + m + "," + n + "}$").test(this);

};
//��֤�Ƿ��� ^%&',;=?$\" ���ַ���[^%&',;=?$\x22]+
//��֤���֣�^[\u4e00-\u9fa5],{0,}$
//��֤Email��ַ��^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
//��֤InternetURL��^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ��^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
//��֤�绰���룺^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$��--��ȷ��ʽΪ��XXXX-XXXXXXX��XXXX-XXXXXXXX��XXX-XXXXXXX��XXX-XXXXXXXX��XXXXXXX��XXXXXXXX��
//��֤���֤�ţ�15λ��18λ���֣���^\d{15}|\d{}18$
//��֤һ���12���£�^(0?[1-9]|1[0-2])$ ��ȷ��ʽΪ����01��-��09���͡�1����12��
//��֤һ���µ�31�죺^((0?[1-9])|((1|2)[0-9])|30|31)$ ��ȷ��ʽΪ��01��09��1��31��
//������^-?\d+$
//�Ǹ����������������� + 0����^\d+(\.\d+)?$
//�������� ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
//�������������������� + 0�� ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
//�������� ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
//������ ^(-?\d+)(\.\d+)?
/* ��������ƥ�� */

/*
* @summary ����ַ����Ƿ�ΪURL��ַ
* @return {Boolean} 
*/
String.prototype.isUrl = function () {
    return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(this);
};

/*
* @summary ����ַ����Ƿ�Ϊ�ֻ����루֧��+86��
* @return {Boolean} 
* @example (+86)12340000000 +8612340000000 8612340000000 12340000000 true
*/
String.prototype.isMobilePhone = function () {
    return /^((\+?86)|(\(\+86\)))?1\d{10}$/.test(this);
};

/*
* @summary ����ַ����Ƿ�Ϊ�̶��绰��֧��+86��
* @return {Boolean} 
* @example (+86)020-8888888 +86020-8888888 86020-8888888 020-8888888 true
*           (86)020-8888888 020-888888 020-888888888 false
*/
String.prototype.isTelephone = function () {
    return /^((\+?86)|(\(\+86\)))?\d{3,4}-\d{7,8}(-\d{3,4})?$/.test(this);
};

/*
* @summary ����ַ����Ƿ�Ϊ�̶��绰���ֻ����루֧��+86��
* @return {Boolean} 
*/
String.prototype.isPhone = function () {
    return this.isMobilePhone() || this.isTelephone();
};

/*
* @summary ����ַ����Ƿ�ΪQQ ���ݵ�ǰ��Ѷ���ŵ�����ⶥ����Ϊ10λ
* @return {Boolean} 
*/
String.prototype.isQQ = function () {
    return /^[1-9][0-9]{4,9}$/.test(this);
};
/*
* @summary ����ַ����Ƿ�Ϊ���֤����
* @return {Boolean} 
*/
String.prototype.isIDCardNumber = function () {
    return /(^\d{15}$)|(^\d{17}(?:\d|x|X)$)/.test(this);
};

/*
* ����ַ����Ƿ�ΪEmail��ַ
* @return {Boolean} 
*/
String.prototype.isEmail = function () {
    return new RegExp("^[a-z0-9][a-z0-9\\-_.]*[a-z0-9]+@(([a-z0-9]([a-z0-9]*[-_]?[a-z0-9]+)+\\.[a-z0-9]+(\\.[a-z0-9]+)?)|(([1-9]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))\\.(([\\d]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))\\.){2}([1-9]|([1-9]\\d)|(1\\d\\d)|(2([0-4]\\d|5[0-5])))))$", 'gi').test(this);
};
/*
 * ����ַ����Ƿ�Ϊ�й���������
 * @return {Boolean} 
 */
String.prototype.isPostCode = function () {
    return /^[1-9]\d{5}$/.test(this);
};