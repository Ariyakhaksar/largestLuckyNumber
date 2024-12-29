"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// تابعی برای یافتن بزرگترین عدد شانسی (شامل ارقام 4 و 7)
const LargestLuckyNumber = (n) => {
    // تبدیل عدد به رشته برای پردازش رقم به رقم
    const str = n.toString();
    let result = ""; // متغیری برای ذخیره عدد شانسی نهایی به صورت رشته.
    let changed = false; // علامتی برای بررسی اینکه آیا تغییری ایجاد شده است یا خیر.
    // پیمایش هر رقم از عدد ورودی.
    for (let i = 0; i < str.length; i++) {
        const digit = parseInt(str[i]); // تبدیل رقم فعلی به عدد.
        if (!changed) {
            // اگر هنوز تغییری ایجاد نشده است:
            if (digit < 4) {
                // اگر رقم کمتر از 4 است، به صفر تبدیل کن.
                result += "0";
                changed = true;
            }
            else if (digit > 7) {
                // اگر رقم بزرگتر از 7 است، آن را به 7 تغییر دهید.
                result += "7";
                changed = true;
            }
            else if (digit === 5 || digit === 6) {
                // اگر رقم برابر 5 یا 6 است، آن را به 4 تغییر دهید (نزدیک‌ترین رقم معتبر کوچکتر).
                result += "4";
                changed = true;
            }
            else {
                // اگر رقم قبلاً 4 یا 7 است، همان را نگه دارید.
                result += digit.toString();
            }
        }
        else {
            // اگر تغییری قبلاً انجام شده است، باقی ارقام را با 7 پر کنید.
            result += "7";
        }
    }
    // تبدیل رشته نتیجه به عدد و بازگرداندن آن.
    return parseInt(result);
};
exports.default = LargestLuckyNumber;
