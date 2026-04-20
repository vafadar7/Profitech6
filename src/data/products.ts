export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  specs: Record<string, string>;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  filters: Filter[];
}

export interface Filter {
  key: string;
  label: string;
  options: string[];
}

export const categories: Category[] = [
  {
    id: "gaming",
    name: "Oyun Noutbukları",
    filters: [
      { key: "gpu", label: "GPU", options: ["RTX 4090", "RTX 4080", "RTX 4070", "RTX 4060", "RTX 3060"] },
      { key: "cpu", label: "CPU", options: ["i9-14900HX", "i7-14700HX", "i5-14500HX", "Ryzen 9 7945HX", "Ryzen 7 7840HS"] },
      { key: "ram", label: "RAM", options: ["64GB", "32GB", "16GB"] },
      { key: "ssd", label: "SSD", options: ["2TB", "1TB", "512GB"] },
      { key: "refresh", label: "Ekran Hz", options: ["240Hz", "165Hz", "144Hz", "120Hz"] },
    ],
  },
  {
    id: "business",
    name: "İş Noutbukları",
    filters: [
      { key: "battery", label: "Batareya", options: ["12+ saat", "8-12 saat", "5-8 saat"] },
      { key: "weight", label: "Çəki", options: ["< 1kg", "1-1.5kg", "1.5-2kg"] },
      { key: "cpu", label: "CPU", options: ["i7", "i5", "Ultra 7", "Ultra 5"] },
      { key: "ram", label: "RAM", options: ["32GB", "16GB", "8GB"] },
      { key: "ssd", label: "SSD", options: ["1TB", "512GB", "256GB"] },
    ],
  },
  {
    id: "home",
    name: "Ev Noutbukları",
    filters: [
      { key: "price", label: "Qiymət", options: ["< 1000 AZN", "1000-1500 AZN", "1500-2000 AZN", "> 2000 AZN"] },
      { key: "ram", label: "RAM", options: ["16GB", "8GB", "4GB"] },
      { key: "ssd", label: "SSD", options: ["512GB", "256GB", "128GB"] },
      { key: "screen", label: "Ekran ölçüsü", options: ["17.3\"", "15.6\"", "14\"", "13.3\""] },
    ],
  },
  {
    id: "printers",
    name: "Printerlər",
    filters: [
      { key: "type", label: "Tip", options: ["Lazer", "Inkjet"] },
      { key: "color", label: "Rəng", options: ["Rəngli", "Qara-ağ"] },
      { key: "wifi", label: "Wi-Fi", options: ["Var", "Yox"] },
      { key: "speed", label: "Çap sürəti", options: ["30+ səh/san", "20-30 səh/san", "10-20 səh/san"] },
    ],
  },
  {
    id: "other",
    name: "Digər İT Avadanlıqları",
    filters: [
      { key: "type", label: "Tip", options: ["Monitor", "Klaviatura", "Siçan", "Webcam", "Adapter", "Kabellər"] },
      { key: "brand", label: "Brend", options: ["Logitech", "HP", "Dell", "Samsung", "LG", "Acer"] },
      { key: "compatibility", label: "Uyğunluq", options: ["Universal", "Windows", "Mac", "Gaming"] },
      { key: "price", label: "Qiymət", options: ["< 100 AZN", "100-300 AZN", "300-500 AZN", "> 500 AZN"] },
    ],
  },
];

// ⚠️ NÜMUNƏ MƏHSULLAR SİLİNDİ - Artıq boşdur
// Məhsulları Admin Paneldən əlavə edin (localStorage-da saxlanılır)
export const products: Product[] = [
  // Boşdur - Admin paneldən əlavə edin
];

export const features = [
  {
    id: "f1",
    title: "100% Qarantiya",
    description: "Bütün məhsullar rəsmi distribyutor zəmanəti ilə təqdim olunur",
    icon: "Shield",
  },
  {
    id: "f2",
    title: "Sürətli Çatdırılma",
    description: "Sifarişləriniz 24 saat ərzində Bakı daxilində çatdırılır",
    icon: "Truck",
  },
  {
    id: "f3",
    title: "WhatsApp Dəstək",
    description: "Məhsul seçimində kömək üçün WhatsApp üzərindən əlaqə saxlayın",
    icon: "MessageCircle",
  },
  {
    id: "f4",
    title: "Ən Sərfəli Qiymətlər",
    description: "Bakıda ən rəqabətli qiymət zəmanəti veririk",
    icon: "BadgePercent",
  },
];

export const steps = [
  {
    id: "s1",
    number: "01",
    title: "Məhsul Seçin",
    description: "Kategoriyalara baxaraq sizə uyğun məhsulu tapın",
  },
  {
    id: "s2",
    number: "02",
    title: "WhatsApp Yazın",
    description: "Məhsul səhifəsindəki WhatsApp düyməsini klikləyin",
  },
  {
    id: "s3",
    number: "03",
    title: "Sifarişi Təsdiqləyin",
    description: "Menecerimiz sizinlə əlaqə saxlayaraq detalları dəqiqləşdirəcək",
  },
  {
    id: "s4",
    number: "04",
    title: "Çatdırılma",
    description: "Sifarişiniz ünvanınıza qədər çatdırılacaq",
  },
];

export const pricingPlans = [
  {
    id: "plan1",
    name: "Ev İstifadəçisi",
    description: "Gündəlik istifadə üçün ideal həll",
    price: "500 AZN'dən",
    features: ["Məktəb və universitet üçün", "Ofis proqramları", "İnternet və sosial şəbəkələr", "Film və musiqi"],
    cta: "Məhsullara Bax",
    popular: false,
  },
  {
    id: "plan2",
    name: "Peşəkar İş",
    description: "Biznes və iş mühitləri üçün optimallaşdırılmış",
    price: "1500 AZN'dən",
    features: ["Yüksək performans", "Uzun batareya ömrü", "Təhlükəsizlik funksiyaları", "Korporativ dəstək"],
    cta: "Məhsullara Bax",
    popular: true,
  },
  {
    id: "plan3",
    name: "Gaming / Yüksək Performans",
    description: "Oyun və professional işlər üçün maksimum güc",
    price: "2500 AZN'dən",
    features: ["Güclü GPU", "Yüksək yeniləmə tezliyi", "RGB işıqlandırma", "Ən son texnologiya"],
    cta: "Məhsullara Bax",
    popular: false,
  },
];