// 定义语言数据
const languageData = {
    // 中文
    zh: {
        // 页面标题和导航
        "app-title": "电动自行车租赁 App Prototype",
        "app-subtitle": "iOS UI/UX Design",
        "welcome-login": "欢迎/登录",
        "home-browse": "首页/浏览",
        "product-detail": "产品详情",
        "rental-process": "租赁流程",
        "my-account": "我的账户",
        "cart-checkout": "购物车/结账",
        "footer-text": "电动自行车租赁 App Prototype © 2023",
        
        // 底部导航栏
        "home": "首页",
        "discover": "发现",
        "nearby": "附近",
        "shopping-cart": "购物车",
        "my": "我的",
        
        // 登录页
        "app-slogan": "绿色出行，畅享骑行",
        "phone-number": "手机号码",
        "phone-placeholder": "请输入手机号码",
        "password": "密码",
        "password-placeholder": "请输入密码",
        "forgot-password": "忘记密码？",
        "login-btn": "登录",
        "or": "或",
        "no-account": "还没有帐号？",
        "register-now": "立即注册",
        "guest-browse": "游客浏览",
        
        // 首页/浏览
        "current-location": "当前位置",
        "search-placeholder": "搜索电动自行车",
        "categories": "类别",
        "electric": "电动",
        "mountain": "山地",
        "city": "城市",
        "popular-now": "热门车型",
        "per-hour": "¥25/小时",
        "eco-rider": "Eco Rider X1",
        "eco-rider-desc": "轻便电动自行车，适合城市代步",
        "eco-rider-price": "¥25/小时",
        "urban-glide": "Urban Glide 2.0",
        "urban-glide-desc": "城市通勤电动自行车",
        "urban-glide-price": "¥30/小时",
        "mountain-explorer": "Mountain Explorer",
        "mountain-explorer-desc": "山地越野电动自行车",
        "mountain-explorer-price": "¥40/小时",
        "compact-folder": "Compact Folder",
        "compact-folder-desc": "便携折叠电动自行车",
        "compact-folder-price": "¥28/小时",
        "city-ebike": "城市轻便电动车 X1 Pro",
        "ebike-weekly-price": "¥549.00",
        "helmet-weekly-price": "¥35.00",
        "lock-price": "¥15/周",
        "light-price": "¥10/周",
        "shed-price": "¥20/周",
        
        // 产品详情页
        "review-count": "4.8 (245条评价)",
        "monthly-sales": "月销 1,298",
        "limited-offer": "限时优惠",
        "product-specs": "产品规格",
        "max-speed": "最高时速",
        "battery-range": "续航里程",
        "bike-weight": "整车重量",
        "charging-time": "充电时间",
        "rental-options": "租赁选项",
        "daily-rental": "日租",
        "weekly-rental": "周租",
        "monthly-rental": "月租",
        "user-reviews": "用户评价",
        "view-all": "查看全部",
        "review-content": "电动车非常轻便，骑行感受很好，电池续航也不错，整体来说非常满意，客服态度也很好！",
        "consult": "咨询",
        "rent-now": "立即租赁",
        
        // 租赁流程页
        "confirm-rental": "确认租赁",
        "select-model": "选择车型",
        "confirm-info": "确认信息",
        "pay-deposit": "支付订金",
        "complete": "完成",
        "weekly-rental-price": "周租 · ¥549 / 7天",
        "rental-dates": "租赁日期",
        "start-date": "开始日期",
        "end-date": "结束日期",
        "month-year": "六月 2023",
        "sun": "日",
        "mon": "一",
        "tue": "二",
        "wed": "三",
        "thu": "四",
        "fri": "五",
        "sat": "六",
        "pickup-location": "取还地点",
        "store-location": "西湖区文三路万塘路交叉口门店",
        "cost-breakdown": "费用明细",
        "rental-fee": "租金（7天）",
        "rental-fee-value": "¥549.00",
        "deposit-refundable": "押金（可退）",
        "deposit-value": "¥1,000.00",
        "insurance-required": "保险费（必选）",
        "insurance-value": "¥35.00",
        "coupon": "优惠券",
        "coupon-value": "-¥50.00",
        "total": "总计",
        "total-value": "¥1,534.00",
        
        // 购物车页面
        "weekly-rental-days": "周租 · 7天",
        "safety-helmet": "安全头盔",
        "recommended-accessories": "推荐配件",
        "more": "更多",
        "anti-theft-lock": "防盗锁",
        "front-light": "车前灯",
        "bike-shed": "车棚",
        "add": "加入",
        "coupon-code-placeholder": "输入优惠码",
        "apply": "应用",
        "coupon-condition": "满¥500可用",
        "valid-until": "有效期至：2023-07-31",
        "selected": "已选择",
        "no-minimum": "无门槛",
        "select": "选择",
        
        // 我的账户页面
        "regular-member": "普通会员",
        "points": "230 积分",
        "my-wallet": "我的钱包",
        "account-balance": "账户余额",
        "coupons": "优惠券",
        "deposit": "押金",
        "current-rental": "当前租赁",
        "view-details": "查看详情",
        "west-lake-store": "西湖区店",
        "rental-progress": "租期进度",
        "rental-history": "租赁记录",
        "favorites": "收藏夹",
        "store-map": "门店地图",
        "payment-methods": "支付方式",
        "customer-service": "客户服务",
        "member-benefits": "会员福利",
        "help-center": "帮助中心",
        "invite-friends": "分享邀请",
        "recent-activity": "最近活动",
        "view-more": "查看更多",
        "rented-city-ebike": "租赁城市电动车",
        "account-recharge": "充值账户"
    },
    
    // 英文
    en: {
        // 页面标题和导航
        "app-title": "Electric Bike Rental App Prototype",
        "app-subtitle": "iOS UI/UX Design",
        "welcome-login": "Welcome/Login",
        "home-browse": "Home/Browse",
        "product-detail": "Product Detail",
        "rental-process": "Rental Process",
        "my-account": "My Account",
        "cart-checkout": "Cart/Checkout",
        "footer-text": "Electric Bike Rental App Prototype © 2023",
        
        // 底部导航栏
        "home": "Home",
        "discover": "Discover",
        "nearby": "Nearby",
        "shopping-cart": "Cart",
        "my": "My",
        
        // 登录页
        "app-slogan": "Green Travel, Enjoy Riding",
        "phone-number": "Phone Number",
        "phone-placeholder": "Enter your phone number",
        "password": "Password",
        "password-placeholder": "Enter your password",
        "forgot-password": "Forgot Password?",
        "login-btn": "Login",
        "or": "OR",
        "no-account": "Don't have an account?",
        "register-now": "Register Now",
        "guest-browse": "Guest Browse",
        
        // 首页/浏览
        "current-location": "Current Location",
        "search-placeholder": "Search electric bikes",
        "categories": "Categories",
        "electric": "Electric",
        "mountain": "Mountain",
        "city": "City",
        "popular-now": "Popular Now",
        "per-hour": "$3.5/hour",
        "eco-rider": "Eco Rider X1",
        "eco-rider-desc": "Lightweight electric bicycle, ideal for city commuting",
        "eco-rider-price": "$3.5/hour",
        "urban-glide": "Urban Glide 2.0",
        "urban-glide-desc": "Urban commuter electric bicycle",
        "urban-glide-price": "$4.2/hour",
        "mountain-explorer": "Mountain Explorer",
        "mountain-explorer-desc": "Off-road mountain electric bicycle",
        "mountain-explorer-price": "$5.6/hour",
        "compact-folder": "Compact Folder",
        "compact-folder-desc": "Portable folding electric bicycle",
        "compact-folder-price": "$3.9/hour",
        "city-ebike": "City Lightweight E-Bike X1 Pro",
        "ebike-weekly-price": "$76.00",
        "helmet-weekly-price": "$5.00",
        "lock-price": "$2/week",
        "light-price": "$1.5/week",
        "shed-price": "$3/week",
        
        // 产品详情页
        "review-count": "4.8 (245 reviews)",
        "monthly-sales": "Monthly sales: 1,298",
        "limited-offer": "Limited Offer",
        "product-specs": "Product Specifications",
        "max-speed": "Max Speed",
        "battery-range": "Battery Range",
        "bike-weight": "Bike Weight",
        "charging-time": "Charging Time",
        "rental-options": "Rental Options",
        "daily-rental": "Daily",
        "weekly-rental": "Weekly",
        "monthly-rental": "Monthly",
        "user-reviews": "User Reviews",
        "view-all": "View All",
        "review-content": "The electric bike is very lightweight, rides very well, and has good battery life. Overall, I'm very satisfied, and the customer service is also good!",
        "consult": "Consult",
        "rent-now": "Rent Now",
        
        // 租赁流程页
        "confirm-rental": "Confirm Rental",
        "select-model": "Select Model",
        "confirm-info": "Confirm Info",
        "pay-deposit": "Pay Deposit",
        "complete": "Complete",
        "weekly-rental-price": "Weekly · $76 / 7 days",
        "rental-dates": "Rental Dates",
        "start-date": "Start Date",
        "end-date": "End Date",
        "month-year": "June 2023",
        "sun": "Sun",
        "mon": "Mon",
        "tue": "Tue",
        "wed": "Wed",
        "thu": "Thu",
        "fri": "Fri",
        "sat": "Sat",
        "pickup-location": "Pickup/Return Location",
        "store-location": "West Lake District, Wensan Road & Wangtang Road Store",
        "cost-breakdown": "Cost Breakdown",
        "rental-fee": "Rental Fee (7 days)",
        "rental-fee-value": "$76.00",
        "deposit-refundable": "Deposit (Refundable)",
        "deposit-value": "$140.00",
        "insurance-required": "Insurance (Required)",
        "insurance-value": "$5.00",
        "coupon": "Coupon",
        "coupon-value": "-$7.00",
        "total": "Total",
        "total-value": "$214.00",
        
        // 购物车页面
        "weekly-rental-days": "Weekly · 7 days",
        "safety-helmet": "Safety Helmet",
        "recommended-accessories": "Recommended Accessories",
        "more": "More",
        "anti-theft-lock": "Anti-theft Lock",
        "front-light": "Front Light",
        "bike-shed": "Bike Shed",
        "add": "Add",
        "coupon-code-placeholder": "Enter coupon code",
        "apply": "Apply",
        "coupon-condition": "For orders over $70",
        "valid-until": "Valid until: 2023-07-31",
        "selected": "Selected",
        "no-minimum": "No minimum",
        "select": "Select",
        
        // 我的账户页面
        "regular-member": "Regular Member",
        "points": "230 Points",
        "my-wallet": "My Wallet",
        "account-balance": "Account Balance",
        "coupons": "Coupons",
        "deposit": "Deposit",
        "current-rental": "Current Rental",
        "view-details": "View Details",
        "west-lake-store": "West Lake Store",
        "rental-progress": "Rental Progress",
        "rental-history": "Rental History",
        "favorites": "Favorites",
        "store-map": "Store Map",
        "payment-methods": "Payment Methods",
        "customer-service": "Customer Service",
        "member-benefits": "Member Benefits",
        "help-center": "Help Center",
        "invite-friends": "Invite Friends",
        "recent-activity": "Recent Activity",
        "view-more": "View More",
        "rented-city-ebike": "Rented City E-Bike",
        "account-recharge": "Account Recharge"
    },
    
    // 高棉语
    km: {
        // 页面标题和导航
        "app-title": "កម្មវិធីជួលកង់អគ្គិសនី Prototype",
        "app-subtitle": "iOS UI/UX រចនា",
        "welcome-login": "សូមស្វាគមន៍/ចូល",
        "home-browse": "ទំព័រដើម/រកមើល",
        "product-detail": "ព័ត៌មានលម្អិតផលិតផល",
        "rental-process": "ដំណើរការជួល",
        "my-account": "គណនីរបស់ខ្ញុំ",
        "cart-checkout": "កន្រ្តក/ទូទាត់ប្រាក់",
        "footer-text": "កម្មវិធីជួលកង់អគ្គិសនី Prototype © 2023",
        
        // 底部导航栏
        "home": "ទំព័រដើម",
        "discover": "រកឃើញ",
        "nearby": "នៅជិត",
        "shopping-cart": "កន្រ្តក",
        "my": "របស់ខ្ញុំ",
        
        // 登录页
        "app-slogan": "ធ្វើដំណើរបៃតង រីករាយជាមួយការជិះកង់",
        "phone-number": "លេខទូរស័ព្ទ",
        "phone-placeholder": "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",
        "password": "ពាក្យសម្ងាត់",
        "password-placeholder": "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក",
        "forgot-password": "ភ្លេចពាក្យសម្ងាត់?",
        "login-btn": "ចូល",
        "or": "ឬ",
        "no-account": "មិនមានគណនីទេឬ?",
        "register-now": "ចុះឈ្មោះឥឡូវនេះ",
        "guest-browse": "រកមើលជាភ្ញៀវ",
        
        // 首页/浏览
        "current-location": "ទីតាំងបច្ចុប្បន្ន",
        "search-placeholder": "ស្វែងរកកង់អគ្គិសនី",
        "categories": "ប្រភេទ",
        "electric": "អគ្គិសនី",
        "mountain": "ភ្នំ",
        "city": "ទីក្រុង",
        "popular-now": "ពេញនិយមឥឡូវនេះ",
        "per-hour": "$3.5/ម៉ោង",
        "eco-rider": "Eco Rider X1",
        "eco-rider-desc": "កង់អគ្គិសនីស្រាល សមរម្យសម្រាប់ការធ្វើដំណើរក្នុងទីក្រុង",
        "eco-rider-price": "$3.5/ម៉ោង",
        "urban-glide": "Urban Glide 2.0",
        "urban-glide-desc": "កង់អគ្គិសនីធ្វើដំណើរក្នុងទីក្រុង",
        "urban-glide-price": "$4.2/ម៉ោង",
        "mountain-explorer": "Mountain Explorer",
        "mountain-explorer-desc": "កង់អគ្គិសនីសម្រាប់ជិះលើភ្នំ",
        "mountain-explorer-price": "$5.6/ម៉ោង",
        "compact-folder": "Compact Folder",
        "compact-folder-desc": "កង់អគ្គិសនីបត់បានងាយស្រួលយកតាមខ្លួន",
        "compact-folder-price": "$3.9/ម៉ោង",
        "city-ebike": "កង់អគ្គិសនីស្រាលក្នុងទីក្រុង X1 Pro",
        "ebike-weekly-price": "$76.00",
        "helmet-weekly-price": "$5.00",
        "lock-price": "$2/សប្តាហ៍",
        "light-price": "$1.5/សប្តាហ៍",
        "shed-price": "$3/សប្តាហ៍",
        
        // 产品详情页
        "review-count": "4.8 (245 ការវាយតម្លៃ)",
        "monthly-sales": "លក់ប្រចាំខែ៖ 1,298",
        "limited-offer": "ការផ្តល់ជូនមានកំណត់",
        "product-specs": "លក្ខណៈបច្ចេកទេស",
        "max-speed": "ល្បឿនអតិបរមា",
        "battery-range": "ចម្ងាយថ្ម",
        "bike-weight": "ទម្ងន់កង់",
        "charging-time": "ពេលសាកថ្ម",
        "rental-options": "ជម្រើសជួល",
        "daily-rental": "ប្រចាំថ្ងៃ",
        "weekly-rental": "ប្រចាំសប្តាហ៍",
        "monthly-rental": "ប្រចាំខែ",
        "user-reviews": "ការវាយតម្លៃរបស់អ្នកប្រើប្រាស់",
        "view-all": "មើលទាំងអស់",
        "review-content": "កង់អគ្គិសនីមានទម្ងន់ស្រាល ជិះល្អណាស់ ហើយថ្មមានអាយុកាលប្រើប្រាស់ល្អ។ ជារួម ខ្ញុំពេញចិត្តខ្លាំងណាស់ ហើយសេវាកម្មអតិថិជនក៏ល្អដែរ!",
        "consult": "ពិគ្រោះ",
        "rent-now": "ជួលឥឡូវនេះ",
        
        // 租赁流程页
        "confirm-rental": "បញ្ជាក់ការជួល",
        "select-model": "ជ្រើសរើសម៉ូដែល",
        "confirm-info": "បញ្ជាក់ព័ត៌មាន",
        "pay-deposit": "បង់ប្រាក់កក់",
        "complete": "បញ្ចប់",
        "weekly-rental-price": "ប្រចាំសប្តាហ៍ · $76 / 7 ថ្ងៃ",
        "rental-dates": "កាលបរិច្ឆេទជួល",
        "start-date": "កាលបរិច្ឆេទចាប់ផ្តើម",
        "end-date": "កាលបរិច្ឆេទបញ្ចប់",
        "month-year": "មិថុនា 2023",
        "sun": "អា",
        "mon": "ច",
        "tue": "អ",
        "wed": "ពុ",
        "thu": "ព្រ",
        "fri": "សុ",
        "sat": "ស",
        "pickup-location": "ទីតាំងទទួល/ប្រគល់",
        "store-location": "ហាងនៅតំបន់ West Lake, ផ្លូវ Wensan និងផ្លូវ Wangtang",
        "cost-breakdown": "ការបំបែកតម្លៃ",
        "rental-fee": "ថ្លៃឈ្នួល (7 ថ្ងៃ)",
        "rental-fee-value": "$76.00",
        "deposit-refundable": "ប្រាក់កក់ (អាចសងវិញបាន)",
        "deposit-value": "$140.00",
        "insurance-required": "ធានារ៉ាប់រង (តម្រូវ)",
        "insurance-value": "$5.00",
        "coupon": "គូប៉ុង",
        "coupon-value": "-$7.00",
        "total": "សរុប",
        "total-value": "$214.00",
        
        // 购物车页面
        "weekly-rental-days": "ប្រចាំសប្តាហ៍ · 7 ថ្ងៃ",
        "safety-helmet": "មួកសុវត្ថិភាព",
        "recommended-accessories": "គ្រឿងបន្លាស់ដែលណែនាំ",
        "more": "បន្ថែមទៀត",
        "anti-theft-lock": "សោការពារការលួច",
        "front-light": "ភ្លើងមុខ",
        "bike-shed": "ដំបូលកង់",
        "add": "បន្ថែម",
        "coupon-code-placeholder": "បញ្ចូលលេខកូដគូប៉ុង",
        "apply": "អនុវត្ត",
        "coupon-condition": "សម្រាប់ការបញ្ជាទិញលើស $70",
        "valid-until": "មានសុពលភាពរហូតដល់៖ 2023-07-31",
        "selected": "បានជ្រើសរើស",
        "no-minimum": "គ្មានអប្បបរមា",
        "select": "ជ្រើសរើស",
        
        // 我的账户页面
        "regular-member": "សមាជិកធម្មតា",
        "points": "230 ពិន្ទុ",
        "my-wallet": "កាបូបរបស់ខ្ញុំ",
        "account-balance": "សមតុល្យគណនី",
        "coupons": "គូប៉ុង",
        "deposit": "ប្រាក់កក់",
        "current-rental": "ការជួលបច្ចុប្បន្ន",
        "view-details": "មើលព័ត៌មានលម្អិត",
        "west-lake-store": "ហាងតំបន់ West Lake",
        "rental-progress": "ដំណើរការនៃការជួល",
        "rental-history": "ប្រវត្តិជួល",
        "favorites": "ចំណូលចិត្ត",
        "store-map": "ផែនទីហាង",
        "payment-methods": "វិធីទូទាត់ប្រាក់",
        "customer-service": "សេវាកម្មអតិថិជន",
        "member-benefits": "អត្ថប្រយោជន៍សមាជិក",
        "help-center": "មជ្ឈមណ្ឌលជំនួយ",
        "invite-friends": "អញ្ជើញមិត្តភក្តិ",
        "recent-activity": "សកម្មភាពថ្មីៗ",
        "view-more": "មើលបន្ថែម",
        "rented-city-ebike": "បានជួលកង់អគ្គិសនីក្នុងក្រុង",
        "account-recharge": "បញ្ចូលប្រាក់គណនី"
    }
};

// 设置当前语言
let currentLanguage = 'zh';

// 获取所有语言按钮
const languageButtons = document.querySelectorAll('.lang-btn');

// 切换语言的函数
function switchLanguage(lang) {
    // 保存当前选择的语言
    currentLanguage = lang;
    
    // 更新所有带有 data-lang-key 属性的元素的文本
    const elementsWithLangKey = document.querySelectorAll('[data-lang-key]');
    
    elementsWithLangKey.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        
        // 检查是否有对应的翻译
        if (!languageData[lang][key]) {
            console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            return;
        }
        
        // 根据元素类型采取不同的处理方式
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            // 更新输入框的 placeholder
            element.placeholder = languageData[lang][key];
        } else if (element.tagName === 'A' && element.innerHTML.includes('<i class="fas')) {
            // 处理带有图标的链接
            const iconHtml = element.innerHTML.match(/<i class="fas.*?<\/i>/);
            if (iconHtml) {
                element.innerHTML = languageData[lang][key] + ' ' + iconHtml[0];
            } else {
                element.textContent = languageData[lang][key];
            }
        } else {
            // 更新其他元素的文本内容
            element.textContent = languageData[lang][key];
        }
    });
    
    // 更新按钮状态
    languageButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // 保存语言选择到 localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    console.log(`Language switched to: ${lang}`);
}

// 为语言按钮添加点击事件
languageButtons.forEach(button => {
    button.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// 页面加载时检查是否有保存的语言首选项
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languageData[savedLanguage]) {
        switchLanguage(savedLanguage);
    } else {
        // 默认使用中文
        switchLanguage('zh');
    }
}); 