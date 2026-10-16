/**
 * Spotly Web Application - Đà Nẵng Edition
 * Core Interactive Logic & Routing
 */

// Sample Data for Venues (Đà Nẵng City)
const VENUES_DATA = [
  {
    id: 'tch',
    name: 'The Coffee House',
    district: 'haichau',
    rating: 4.7,
    reviewsCount: '1.2k',
    searchReviewsCount: '1,1k',
    category: 'Cà phê',
    tags: ['Cà phê', 'Ăn uống', 'Không gian đẹp'],
    suitableFor: 'Học tập',
    distance: 1.2,
    distanceText: '1,2 km',
    address: '80 Pasteur, P. Hải Châu 1, Q. Hải Châu, TP. Đà Nẵng',
    shortAddress: '80 Pasteur, Q. Hải Châu',
    priceRange: '20k - 60k',
    homePrice: '50k - 100k',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'The Coffee House là chuỗi cà phê nổi tiếng tại Đà Nẵng với không gian hiện đại, thoáng mát và thực đơn đa dạng. Tọa lạc ngay trung tâm quận Hải Châu, đây là địa điểm lý tưởng để học tập, làm việc hoặc thư giãn sau những giờ học tập căng thẳng.',
    amenities: [
      { name: 'Wifi miễn phí', icon: 'fa-wifi' },
      { name: 'Điều hòa', icon: 'fa-snowflake' },
      { name: 'Chỗ đỗ xe', icon: 'fa-motorcycle' },
      { name: 'Thanh toán thẻ', icon: 'fa-credit-card' }
    ],
    menu: [
      { name: 'Cà phê sữa đá', price: '45.000đ', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
      { name: 'Trà đào cam sả', price: '60.000đ', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
      { name: 'Bánh tiramisu', price: '55.000đ', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Nguyễn Minh Anh',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '2 ngày trước',
        comment: 'Không gian đẹp, đồ uống ngon, nhân viên thân thiện. Quán view Pasteur Đà Nẵng rất thoáng. Sẽ quay lại!'
      }
    ],
    isFavorite: true
  },
  {
    id: 'highlands',
    name: 'Highlands Coffee',
    district: 'haichau',
    rating: 4.6,
    reviewsCount: '754',
    searchReviewsCount: '980',
    category: 'Cà phê',
    tags: ['Cà phê', 'Trà', 'Không gian đẹp'],
    suitableFor: 'Gặp gỡ',
    distance: 2.1,
    distanceText: '2,1 km',
    address: '74 Bạch Đằng, P. Hải Châu 1, Q. Hải Châu, TP. Đà Nẵng',
    shortAddress: '74 Bạch Đằng, Q. Hải Châu',
    priceRange: '20k - 70k',
    homePrice: '50k - 100k',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Highlands Coffee Bạch Đằng tọa lạc trên con đường ven sông Hàn thơ mộng với tầm nhìn ngắm cầu Rồng và sông nước tuyệt đẹp, cà phê phin đậm đà chuẩn vị.',
    amenities: [
      { name: 'Wifi miễn phí', icon: 'fa-wifi' },
      { name: 'Điều hòa', icon: 'fa-snowflake' },
      { name: 'Chỗ đỗ xe', icon: 'fa-motorcycle' },
      { name: 'Thanh toán thẻ', icon: 'fa-credit-card' }
    ],
    menu: [
      { name: 'Phin Sữa Đá', price: '39.000đ', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
      { name: 'Freeze Trà Xanh', price: '55.000đ', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Lê Hoàng Nam',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '3 ngày trước',
        comment: 'Cà phê phin sữa đá thơm béo, view ngắm sông Hàn và cầu Rồng rất chill.'
      }
    ],
    isFavorite: false
  },
  {
    id: 'nhulan',
    name: 'Bánh Mì Như Lan',
    district: 'haichau',
    rating: 4.6,
    reviewsCount: '902',
    searchReviewsCount: '742',
    category: 'Ăn uống',
    tags: ['Ăn uống', 'Bánh mì', 'Đặc sản'],
    suitableFor: 'Ăn uống',
    distance: 1.5,
    distanceText: '1,5 km',
    address: '62 Trưng Nữ Vương, P. Bình Hiên, Q. Hải Châu, TP. Đà Nẵng',
    shortAddress: '62 Trưng Nữ Vương, Q. Hải Châu',
    priceRange: '20k - 40k',
    homePrice: '20k - 50k',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Thương hiệu bánh mì gia truyền nổi tiếng tại Đà Nẵng với vỏ bánh giòn rụm, pate gan béo ngậy và chả bò Đà Nẵng thơm ngon đặc sản miền Trung.',
    amenities: [
      { name: 'Chỗ đỗ xe', icon: 'fa-motorcycle' },
      { name: 'Thanh toán thẻ', icon: 'fa-credit-card' },
      { name: 'Giao hàng tận nơi', icon: 'fa-truck-fast' }
    ],
    menu: [
      { name: 'Bánh mì chả bò đặc biệt', price: '35.000đ', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80' },
      { name: 'Bánh bao trứng muối', price: '25.000đ', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Trần Thu Hà',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '1 tuần trước',
        comment: 'Bánh mì nóng hổi giòn tan, pate gan và chả bò Đà Nẵng ngon đậm đà không đâu sánh bằng!'
      }
    ],
    isFavorite: false
  },
  {
    id: 'phuclong',
    name: 'Phúc Long',
    district: 'thanhkhe',
    rating: 4.5,
    reviewsCount: '620',
    searchReviewsCount: '620',
    category: 'Trà',
    tags: ['Trà', 'Cà phê', 'Ăn nhẹ'],
    suitableFor: 'Gặp gỡ',
    distance: 2.4,
    distanceText: '2,4 km',
    address: '241 Nguyễn Văn Linh, P. Vĩnh Trung, Q. Thanh Khê, TP. Đà Nẵng',
    shortAddress: '241 Nguyễn Văn Linh, Q. Thanh Khê',
    priceRange: '25k - 60k',
    homePrice: '50k - 100k',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Thương hiệu trà và cà phê thượng hạng với hương vị trà đậm vị trứ danh như Trà đào, Trà sen vàng và Trà sữa Phúc Long ngay trục đường tài chính Nguyễn Văn Linh Đà Nẵng.',
    amenities: [
      { name: 'Wifi miễn phí', icon: 'fa-wifi' },
      { name: 'Điều hòa', icon: 'fa-snowflake' },
      { name: 'Thanh toán thẻ', icon: 'fa-credit-card' }
    ],
    menu: [
      { name: 'Trà Đào Sữa', price: '50.000đ', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' },
      { name: 'Trà Ô Long Mãng Cầu', price: '55.000đ', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Vũ Đức Duy',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
        rating: 4.5,
        time: '4 ngày trước',
        comment: 'Vị trà rất thơm và đậm đà, quán vị trí đẹp ngay trung tâm đường Nguyễn Văn Linh Đà Nẵng.'
      }
    ],
    isFavorite: false
  },
  {
    id: 'thealley',
    name: 'The Alley',
    district: 'sontra',
    rating: 4.6,
    reviewsCount: '510',
    searchReviewsCount: '510',
    category: 'Trà sữa',
    tags: ['Trà sữa', 'Ăn vặt', 'Gần biển'],
    suitableFor: 'Học tập',
    distance: 0.9,
    distanceText: '0,9 km',
    address: '171 Nguyễn Văn Thoại, P. An Hải Đông, Q. Sơn Trà, TP. Đà Nẵng',
    shortAddress: '171 Nguyễn Văn Thoại, Q. Sơn Trà',
    priceRange: '25k - 75k',
    homePrice: '50k - 100k',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Nổi danh với dòng sữa tươi trân châu đường đen trứ danh, tọa lạc trên tuyến phố du lịch Nguyễn Văn Thoại hướng ra bãi biển Mỹ Khê Đà Nẵng.',
    amenities: [
      { name: 'Wifi tốc độ cao', icon: 'fa-wifi' },
      { name: 'Điều hòa mát lạnh', icon: 'fa-snowflake' },
      { name: 'Thanh toán thẻ & ví điện tử', icon: 'fa-credit-card' }
    ],
    menu: [
      { name: 'Sữa tươi trân châu đường đen', price: '62.000đ', image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Hoàng Kim Yến',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '5 ngày trước',
        comment: 'Trân châu dẻo mềm còn nóng, uống với sữa tươi thanh trùng siêu ngon ngay gần biển Mỹ Khê.'
      }
    ],
    isFavorite: false
  },
  {
    id: 'uttich',
    name: 'Út Tịch Cafe',
    district: 'haichau',
    rating: 4.8,
    reviewsCount: '850',
    searchReviewsCount: '850',
    category: 'Cà phê',
    tags: ['Cà phê', 'Hoài niệm', 'Không gian đẹp'],
    suitableFor: 'Gặp gỡ',
    distance: 0.8,
    distanceText: '0,8 km',
    address: '102 Bạch Đằng, P. Hải Châu 1, Q. Hải Châu, TP. Đà Nẵng',
    shortAddress: '102 Bạch Đằng, Q. Hải Châu',
    priceRange: '25k - 55k',
    homePrice: '30k - 60k',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Quán cà phê mang đậm phong cách vintage Hội An cổ xưa ngay lòng Đà Nẵng với góc view ngắm cầu sông Hàn thơ mộng.',
    amenities: [
      { name: 'Wifi miễn phí', icon: 'fa-wifi' },
      { name: 'Không gian mở', icon: 'fa-tree' },
      { name: 'Thanh toán thẻ', icon: 'fa-credit-card' }
    ],
    menu: [
      { name: 'Cà phê muối Đà Nẵng', price: '38.000đ', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Đỗ Hải Đăng',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '6 ngày trước',
        comment: 'Cà phê muối cực ngon, không gian hoài niệm ngắm phố Bạch Đằng Đà Nẵng.'
      }
    ],
    isFavorite: false
  },
  {
    id: '43factory',
    name: '43 Factory Coffee',
    district: 'nguhanhson',
    rating: 4.9,
    reviewsCount: '1.4k',
    searchReviewsCount: '1,4k',
    category: 'Specialty Coffee',
    tags: ['Specialty Coffee', 'Học tập', 'Kiến trúc'],
    suitableFor: 'Học tập',
    distance: 3.2,
    distanceText: '3,2 km',
    address: '422 Ngô Thì Sĩ, P. Mỹ An, Q. Ngũ Hành Sơn, TP. Đà Nẵng',
    shortAddress: '422 Ngô Thì Sĩ, Q. Ngũ Hành Sơn',
    priceRange: '45k - 120k',
    homePrice: '60k - 120k',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Xưởng rang cà phê đặc sản hàng đầu Đà Nẵng với kiến trúc kính nổi trên mặt nước độc đáo, không gian cực kỳ yên tĩnh để làm việc và thưởng thức specialty coffee.',
    amenities: [
      { name: 'Wifi tốc độ cao', icon: 'fa-wifi' },
      { name: 'Điều hòa mát lạnh', icon: 'fa-snowflake' },
      { name: 'Hồ cá Koi', icon: 'fa-water' }
    ],
    menu: [
      { name: 'Drip Coffee Arabica', price: '75.000đ', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80' }
    ],
    reviews: [
      {
        user: 'Mai Phương Uyên',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        time: '3 ngày trước',
        comment: 'Cà phê specialty tuyệt đỉnh, không gian kính bao quanh hồ cá cực kỳ sáng tạo tại Đà Nẵng.'
      }
    ],
    isFavorite: false
  }
];

// App State
const state = {
  currentView: 'view-home',
  currentPlace: VENUES_DATA[0],
  galleryIndex: 0,
  activeDetailTab: 'overview',
  searchQuery: 'cà phê',
  filters: {
    budget: '20k-60k',
    location: 'near_me',
    purposes: ['study'],
    minRating: 4.5,
    sort: 'rating_desc'
  },
  reviewForm: {
    rating: 5,
    comment: '',
    recommend: 'no', // 'yes', 'no', 'maybe'
    aspects: ['space', 'food', 'drink'], // space, food, drink, service
    images: []
  },
  authMode: 'login', // 'login' or 'register'
  user: null
};

// Toast Notification System
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const bgClass = type === 'success' ? 'bg-[#00897B] text-white' : 'bg-slate-800 text-white';
  const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';

  toast.className = `flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-xl text-sm font-medium ${bgClass} toast-enter mb-2`;
  toast.innerHTML = `
    <i class="fa-solid ${iconClass} text-lg"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 400);
  }, 2600);
}

// Router & View Switcher
function switchView(viewId) {
  state.currentView = viewId;

  // Hide all view containers
  const views = ['view-home', 'view-search', 'view-detail', 'view-review', 'view-auth'];
  views.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === viewId) {
        el.classList.remove('hidden');
        el.style.animation = 'fadeIn 0.25s ease';
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Update top switcher pills
  document.querySelectorAll('.demo-nav-btn').forEach(btn => {
    const target = btn.getAttribute('data-target');
    if (target === viewId) {
      btn.className = 'demo-nav-btn px-3 py-1.5 rounded-full text-xs font-semibold bg-[#00897B] text-white shadow-sm transition-standard whitespace-nowrap';
    } else {
      btn.className = 'demo-nav-btn px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-standard whitespace-nowrap';
    }
  });

  // Update main navigation active state
  updateMainNavLinks(viewId);

  // Scroll to top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // If entering details, refresh view
  if (viewId === 'view-detail') {
    renderPlaceDetails();
  } else if (viewId === 'view-search') {
    renderSearchResults();
  }
}

// Update Header Main Navigation
function updateMainNavLinks(viewId) {
  const homeLink = document.getElementById('nav-link-home');
  const searchLink = document.getElementById('nav-link-search');
  const favLink = document.getElementById('nav-link-fav');

  if (homeLink) homeLink.classList.remove('text-[#00897B]', 'font-semibold', 'border-b-2', 'border-[#00897B]');
  if (searchLink) searchLink.classList.remove('text-[#00897B]', 'font-semibold', 'border-b-2', 'border-[#00897B]');
  if (favLink) favLink.classList.remove('text-[#00897B]', 'font-semibold', 'border-b-2', 'border-[#00897B]');

  if (viewId === 'view-home' && homeLink) {
    homeLink.classList.add('text-[#00897B]', 'font-semibold');
  } else if (viewId === 'view-search' && searchLink) {
    searchLink.classList.add('text-[#00897B]', 'font-semibold');
  }
}

// Toggle Favorite Place
function toggleFavorite(venueId, event) {
  if (event) event.stopPropagation();
  const venue = VENUES_DATA.find(v => v.id === venueId);
  if (!venue) return;

  venue.isFavorite = !venue.isFavorite;
  showToast(venue.isFavorite ? `Đã lưu ${venue.name} vào Yêu thích` : `Đã bỏ lưu ${venue.name}`);

  // Re-render search results or update heart icons
  renderSearchResults();
  renderHomeCards();

  // If in details view, update heart icon
  const detailHeart = document.getElementById('detail-heart-btn');
  if (detailHeart) {
    detailHeart.innerHTML = venue.isFavorite 
      ? '<i class="fa-solid fa-heart text-rose-500 text-lg"></i>' 
      : '<i class="fa-regular fa-heart text-gray-700 text-lg"></i>';
  }
}

// Navigate to Place Details
function openPlaceDetail(venueId) {
  const venue = VENUES_DATA.find(v => v.id === venueId);
  if (venue) {
    state.currentPlace = venue;
    state.galleryIndex = 0;
  }
  switchView('view-detail');
}

// Render Home Cards
function renderHomeCards() {
  const container = document.getElementById('home-suggestions-grid');
  if (!container) return;

  // The 4 venues from Mockup 1: The Coffee House, Bánh Mì Như Lan, Highlands Coffee, Phúc Long
  const homeVenues = VENUES_DATA.slice(0, 4);

  container.innerHTML = homeVenues.map(venue => `
    <div onclick="openPlaceDetail('${venue.id}')" 
         class="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col group">
      <!-- Thumbnail -->
      <div class="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-100">
        <img src="${venue.image}" alt="${venue.name}" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
        <button onclick="toggleFavorite('${venue.id}', event)" 
                class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white transition-all text-slate-700 hover:text-rose-500">
          <i class="${venue.isFavorite ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart'} text-sm"></i>
        </button>
      </div>

      <!-- Card Body -->
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <!-- Title -->
          <h3 class="font-bold text-slate-900 text-base group-hover:text-[#00897B] transition-colors truncate">
            ${venue.name}
          </h3>

          <!-- Rating -->
          <div class="flex items-center gap-1.5 mt-1 text-sm">
            <i class="fa-solid fa-star text-amber-500 text-xs"></i>
            <span class="font-bold text-slate-800">${venue.rating}</span>
            <span class="text-slate-400 text-xs">(${venue.reviewsCount})</span>
          </div>

          <!-- Categories -->
          <p class="text-xs text-slate-500 mt-2 truncate">
            ${venue.tags.join('  •  ')}
          </p>
        </div>

        <!-- Footer details: Distance & Price -->
        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
          <div class="flex items-center gap-1 text-slate-500">
            <i class="fa-solid fa-location-dot text-[#00897B] text-xs"></i>
            <span>${venue.distance} km</span>
          </div>
          <div class="text-slate-700 font-semibold">
            ${venue.homePrice}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Search Results (View 2)
function renderSearchResults() {
  const container = document.getElementById('search-results-list');
  const countEl = document.getElementById('search-results-count');
  if (!container) return;

  // Filter venues based on selected criteria
  let filtered = [...VENUES_DATA];

  // Budget Filter
  if (state.filters.budget === 'under_20k') {
    filtered = filtered.filter(v => v.priceRange.includes('20k') || v.priceRange.includes('15k'));
  } else if (state.filters.budget === '20k-60k') {
    filtered = filtered.filter(v => v.priceRange.includes('20k') || v.priceRange.includes('25k') || v.priceRange.includes('40k') || v.priceRange.includes('60k'));
  } else if (state.filters.budget === '50k-80k') {
    filtered = filtered.filter(v => v.priceRange.includes('50k') || v.priceRange.includes('60k') || v.priceRange.includes('70k') || v.priceRange.includes('75k'));
  } else if (state.filters.budget === 'above_80k') {
    filtered = filtered.filter(v => v.priceRange.includes('75k') || v.priceRange.includes('100k') || v.priceRange.includes('120k'));
  }

  // Location / District Filter (Đà Nẵng Districts)
  if (state.filters.location && state.filters.location !== 'near_me') {
    if (state.filters.location === 'other') {
      filtered = filtered.filter(v => !['haichau', 'sontra', 'nguhanhson', 'thanhkhe'].includes(v.district));
    } else {
      filtered = filtered.filter(v => v.district === state.filters.location);
    }
  }

  // Purpose Filter
  if (state.filters.purposes.length > 0) {
    if (state.filters.purposes.includes('study')) {
      filtered = filtered.filter(v => v.suitableFor === 'Học tập' || v.category === 'Cà phê' || v.category === 'Trà sữa' || v.category === 'Specialty Coffee');
    }
  }

  // Rating Filter
  if (state.filters.minRating) {
    filtered = filtered.filter(v => v.rating >= state.filters.minRating);
  }

  // Sort
  if (state.filters.sort === 'rating_desc') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.filters.sort === 'distance_asc') {
    filtered.sort((a, b) => a.distance - b.distance);
  }

  // Update count
  if (countEl) {
    countEl.textContent = `Kết quả tìm kiếm (${filtered.length} địa điểm tại Đà Nẵng)`;
  }

  // If no venues match filter, show fallback or all
  const displayList = filtered.length > 0 ? filtered : VENUES_DATA;

  container.innerHTML = displayList.map(venue => `
    <div onclick="openPlaceDetail('${venue.id}')"
         class="bg-white rounded-2xl border border-slate-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col sm:flex-row gap-4 group">
      <!-- Thumbnail -->
      <div class="relative w-full sm:w-48 h-40 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
        <img src="${venue.image}" alt="${venue.name}" 
             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
      </div>

      <!-- Content -->
      <div class="flex-1 flex flex-col justify-between min-w-0">
        <div>
          <!-- Header with Title & Heart -->
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-bold text-slate-900 text-base sm:text-lg group-hover:text-[#00897B] transition-colors truncate">
              ${venue.name}
            </h3>
            <button onclick="toggleFavorite('${venue.id}', event)" 
                    class="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center transition-colors text-slate-400 hover:text-rose-500 flex-shrink-0">
              <i class="${venue.isFavorite ? 'fa-solid fa-heart text-rose-500' : 'fa-regular fa-heart text-slate-400'} text-base"></i>
            </button>
          </div>

          <!-- Rating -->
          <div class="flex items-center gap-1.5 mt-1 text-sm">
            <i class="fa-solid fa-star text-amber-500 text-xs"></i>
            <span class="font-bold text-slate-800">${venue.rating}</span>
            <span class="text-slate-400 text-xs">(${venue.searchReviewsCount || venue.reviewsCount})</span>
          </div>

          <!-- Category & Price -->
          <div class="flex items-center gap-2 mt-2 text-xs sm:text-sm text-slate-600">
            <div class="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center text-[#00897B]">
              <i class="fa-solid ${venue.category === 'Ăn uống' ? 'fa-utensils' : 'fa-mug-saucer'} text-xs"></i>
            </div>
            <span>${venue.category}</span>
            <span class="text-slate-300">•</span>
            <span class="font-medium text-slate-700">${venue.priceRange}</span>
          </div>
        </div>

        <!-- Address & Distance -->
        <div class="flex items-center gap-2 mt-3 pt-2 text-xs text-slate-500 border-t border-slate-50 truncate">
          <i class="fa-solid fa-location-dot text-[#00897B] flex-shrink-0"></i>
          <span class="font-semibold text-slate-700">${venue.distanceText || venue.distance + ' km'}</span>
          <span class="text-slate-300">•</span>
          <span class="truncate">${venue.shortAddress || venue.address}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Place Details (View 3)
function renderPlaceDetails() {
  const venue = state.currentPlace || VENUES_DATA[0];

  // Set titles and info
  const nameEl = document.getElementById('detail-name');
  const ratingEl = document.getElementById('detail-rating');
  const reviewsCountEl = document.getElementById('detail-reviews-count');
  const priceEl = document.getElementById('detail-price');
  const categoryTagEl = document.getElementById('detail-category-tag');
  const suitableTagEl = document.getElementById('detail-suitable-tag');
  const addressEl = document.getElementById('detail-address');
  const introDescEl = document.getElementById('detail-intro-desc');
  const mainImageEl = document.getElementById('detail-main-image');
  const galleryIndicatorEl = document.getElementById('detail-gallery-counter');
  const heartBtn = document.getElementById('detail-heart-btn');

  if (nameEl) nameEl.textContent = venue.name;
  if (ratingEl) ratingEl.textContent = venue.rating;
  if (reviewsCountEl) reviewsCountEl.textContent = `(${venue.reviewsCount} đánh giá)`;
  if (priceEl) priceEl.textContent = venue.priceRange;
  if (categoryTagEl) categoryTagEl.textContent = venue.category;
  if (suitableTagEl) suitableTagEl.innerHTML = `Phù hợp: ${venue.suitableFor} <i class="fa-solid fa-chevron-right text-[10px] ml-1"></i>`;
  if (addressEl) addressEl.textContent = venue.address;
  if (introDescEl) introDescEl.textContent = venue.description;

  // Heart button state
  if (heartBtn) {
    heartBtn.innerHTML = venue.isFavorite
      ? '<i class="fa-solid fa-heart text-rose-500 text-lg"></i>'
      : '<i class="fa-regular fa-heart text-gray-700 text-lg"></i>';
    heartBtn.onclick = (e) => toggleFavorite(venue.id, e);
  }

  // Gallery
  updateGalleryDisplay();
  renderThumbnails();

  // Render Amenities
  const amenitiesContainer = document.getElementById('detail-amenities-grid');
  if (amenitiesContainer && venue.amenities) {
    amenitiesContainer.innerHTML = venue.amenities.map(a => `
      <div class="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-100 text-center hover:bg-teal-50/50 transition-colors">
        <div class="w-10 h-10 rounded-full bg-[#E6F4F1] text-[#00897B] flex items-center justify-center mb-2">
          <i class="fa-solid ${a.icon} text-base"></i>
        </div>
        <span class="text-xs font-semibold text-slate-700">${a.name}</span>
      </div>
    `).join('');
  }

  // Render Featured Menu
  const menuContainer = document.getElementById('detail-menu-grid');
  if (menuContainer && venue.menu) {
    menuContainer.innerHTML = venue.menu.map(item => `
      <div class="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm flex flex-col hover:shadow transition-shadow">
        <div class="w-full h-32 bg-slate-100 overflow-hidden">
          <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
        </div>
        <div class="p-3">
          <h4 class="font-bold text-xs sm:text-sm text-slate-900 truncate">${item.name}</h4>
          <span class="text-xs font-bold text-[#00897B] mt-1 block">${item.price}</span>
        </div>
      </div>
    `).join('');
  }

  // Render Reviews List
  const reviewsContainer = document.getElementById('detail-reviews-list');
  if (reviewsContainer && venue.reviews) {
    reviewsContainer.innerHTML = venue.reviews.map(r => `
      <div class="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <div class="flex items-center gap-3">
          <img src="${r.avatar}" alt="${r.user}" class="w-10 h-10 rounded-full object-cover">
          <div>
            <h5 class="font-bold text-sm text-slate-900">${r.user}</h5>
            <div class="flex items-center gap-2 mt-0.5">
              <div class="flex text-amber-500 text-xs gap-0.5">
                ${'<i class="fa-solid fa-star"></i>'.repeat(Math.floor(r.rating))}
              </div>
              <span class="text-slate-400 text-xs">${r.time}</span>
            </div>
          </div>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
          ${r.comment}
        </p>
      </div>
    `).join('');
  }
}

// Gallery Navigation
function updateGalleryDisplay() {
  const venue = state.currentPlace || VENUES_DATA[0];
  const mainImageEl = document.getElementById('detail-main-image');
  const counterEl = document.getElementById('detail-gallery-counter');

  if (mainImageEl && venue.gallery && venue.gallery.length > 0) {
    mainImageEl.src = venue.gallery[state.galleryIndex];
  }
  if (counterEl && venue.gallery) {
    counterEl.textContent = `${state.galleryIndex + 1}/${venue.gallery.length}`;
  }

  // Update thumbnail active ring
  document.querySelectorAll('.gallery-thumb-item').forEach((thumb, idx) => {
    if (idx === state.galleryIndex) {
      thumb.className = 'gallery-thumb-item flex-shrink-0 w-14 sm:w-16 h-12 sm:h-14 rounded-lg overflow-hidden border-2 border-[#00897B] ring-2 ring-teal-200 cursor-pointer transition-all';
    } else {
      thumb.className = 'gallery-thumb-item flex-shrink-0 w-14 sm:w-16 h-12 sm:h-14 rounded-lg overflow-hidden border border-slate-200 opacity-70 hover:opacity-100 cursor-pointer transition-all';
    }
  });
}

function prevGalleryImage(e) {
  if (e) e.stopPropagation();
  const venue = state.currentPlace || VENUES_DATA[0];
  if (!venue.gallery) return;
  state.galleryIndex = (state.galleryIndex - 1 + venue.gallery.length) % venue.gallery.length;
  updateGalleryDisplay();
}

function nextGalleryImage(e) {
  if (e) e.stopPropagation();
  const venue = state.currentPlace || VENUES_DATA[0];
  if (!venue.gallery) return;
  state.galleryIndex = (state.galleryIndex + 1) % venue.gallery.length;
  updateGalleryDisplay();
}

function selectGalleryImage(idx) {
  state.galleryIndex = idx;
  updateGalleryDisplay();
}

function renderThumbnails() {
  const container = document.getElementById('detail-thumbnails-row');
  const venue = state.currentPlace || VENUES_DATA[0];
  if (!container || !venue.gallery) return;

  container.innerHTML = venue.gallery.map((imgUrl, idx) => `
    <div onclick="selectGalleryImage(${idx})" 
         class="gallery-thumb-item flex-shrink-0 w-14 sm:w-16 h-12 sm:h-14 rounded-lg overflow-hidden border ${idx === state.galleryIndex ? 'border-2 border-[#00897B] ring-2 ring-teal-200' : 'border-slate-200 opacity-70 hover:opacity-100'} cursor-pointer transition-all">
      <img src="${imgUrl}" alt="Gallery ${idx + 1}" class="w-full h-full object-cover">
    </div>
  `).join('');
}

// Detail View Tabs
function switchDetailTab(tabId) {
  state.activeDetailTab = tabId;

  // Update tab buttons
  const tabs = ['overview', 'menu', 'reviews', 'photos'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-btn-${t}`);
    const section = document.getElementById(`tab-content-${t}`);
    if (btn) {
      if (t === tabId) {
        btn.className = 'pb-3 font-bold text-sm text-[#00897B] border-b-2 border-[#00897B] transition-colors';
      } else {
        btn.className = 'pb-3 font-medium text-sm text-slate-500 hover:text-slate-800 transition-colors';
      }
    }
    if (section) {
      if (t === tabId) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  });
}

// Review Page Interactive Stars
function setReviewRating(rating) {
  state.reviewForm.rating = rating;
  const ratingTextEl = document.getElementById('review-rating-score');
  if (ratingTextEl) {
    ratingTextEl.textContent = `${rating}/5`;
  }

  // Update stars visuals
  const starsContainer = document.getElementById('review-stars-container');
  if (!starsContainer) return;

  const stars = starsContainer.querySelectorAll('button');
  stars.forEach((btn, idx) => {
    const starIcon = btn.querySelector('i');
    if (idx < rating) {
      starIcon.className = 'fa-solid fa-star text-amber-500 text-2xl sm:text-3xl transition-transform';
    } else {
      starIcon.className = 'fa-regular fa-star text-slate-300 text-2xl sm:text-3xl transition-transform';
    }
  });
}

// Review Page Recommendation Toggle (Có / Không / Có thể)
function setRecommendation(option) {
  state.reviewForm.recommend = option;

  const options = ['yes', 'no', 'maybe'];
  options.forEach(opt => {
    const btn = document.getElementById(`btn-recommend-${opt}`);
    if (btn) {
      if (opt === option) {
        btn.className = 'flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-[#00897B] text-white shadow-sm transition-standard';
      } else {
        btn.className = 'flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 transition-standard';
      }
    }
  });
}

// Review Page Aspect Badges Toggle (Không gian, Thức ăn, Đồ uống, Phục vụ)
function toggleReviewAspect(aspect) {
  const index = state.reviewForm.aspects.indexOf(aspect);
  if (index > -1) {
    state.reviewForm.aspects.splice(index, 1);
  } else {
    state.reviewForm.aspects.push(aspect);
  }

  // Re-style aspect pills
  const allAspects = ['space', 'food', 'drink', 'service'];
  allAspects.forEach(item => {
    const pill = document.getElementById(`pill-aspect-${item}`);
    if (pill) {
      const isSelected = state.reviewForm.aspects.includes(item);
      if (isSelected) {
        pill.className = 'cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E6F4F1] text-[#00897B] border border-teal-200 flex items-center gap-1.5 transition-all';
        pill.querySelector('i').className = 'fa-solid fa-check text-xs';
      } else {
        pill.className = 'cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-50 text-slate-500 border border-slate-200 flex items-center gap-1.5 hover:bg-slate-100 transition-all';
        pill.querySelector('i').className = 'hidden';
      }
    }
  });
}

// Review Comment Counter
function handleReviewCommentInput(textarea) {
  const counterEl = document.getElementById('review-char-count');
  state.reviewForm.comment = textarea.value;
  if (counterEl) {
    counterEl.textContent = `${textarea.value.length}/500`;
  }
}

// Review Image Upload Simulation
function handleImageUpload(input) {
  const container = document.getElementById('review-uploaded-previews');
  if (!container || !input.files) return;

  Array.from(input.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const previewEl = document.createElement('div');
      previewEl.className = 'relative w-16 h-16 rounded-lg overflow-hidden border border-slate-200 shadow-sm flex-shrink-0';
      previewEl.innerHTML = `
        <img src="${e.target.result}" class="w-full h-full object-cover">
        <button type="button" onclick="this.parentElement.remove()" class="absolute top-1 right-1 w-4 h-4 bg-slate-900/70 text-white rounded-full flex items-center justify-center text-[10px]">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      container.appendChild(previewEl);
    };
    reader.readAsDataURL(file);
  });
}

// Submit Review Form
function submitReview(e) {
  if (e) e.preventDefault();

  const venue = state.currentPlace || VENUES_DATA[0];
  const newReview = {
    user: 'Bạn (Người dùng)',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    rating: state.reviewForm.rating,
    time: 'Vừa xong',
    comment: state.reviewForm.comment.trim() || 'Địa điểm tuyệt vời tại Đà Nẵng, rất đáng để trải nghiệm cùng bạn bè!'
  };

  venue.reviews.unshift(newReview);
  showToast('Đánh giá của bạn đã được gửi thành công!', 'success');

  // Highlight thank you card
  const thankCard = document.getElementById('review-thank-card');
  if (thankCard) {
    thankCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    thankCard.classList.add('ring-2', 'ring-[#00897B]');
    setTimeout(() => thankCard.classList.remove('ring-2', 'ring-[#00897B]'), 2000);
  }
}

// Auth View Mode Toggle
function switchAuthMode(mode) {
  state.authMode = mode;
  const loginTab = document.getElementById('auth-tab-login');
  const registerTab = document.getElementById('auth-tab-register');
  const loginForm = document.getElementById('auth-form-login');
  const registerForm = document.getElementById('auth-form-register');

  if (mode === 'login') {
    if (loginTab) loginTab.className = 'pb-2 font-bold text-sm text-[#00897B] border-b-2 border-[#00897B] transition-colors cursor-pointer';
    if (registerTab) registerTab.className = 'pb-2 font-medium text-sm text-slate-400 hover:text-slate-600 transition-colors cursor-pointer';
    if (loginForm) loginForm.classList.remove('hidden');
    if (registerForm) registerForm.classList.add('hidden');
  } else {
    if (loginTab) loginTab.className = 'pb-2 font-medium text-sm text-slate-400 hover:text-slate-600 transition-colors cursor-pointer';
    if (registerTab) registerTab.className = 'pb-2 font-bold text-sm text-[#00897B] border-b-2 border-[#00897B] transition-colors cursor-pointer';
    if (loginForm) loginForm.classList.add('hidden');
    if (registerForm) registerForm.classList.remove('hidden');
  }
}

// Password Visibility Toggle
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';

  const icon = btn.querySelector('i');
  if (icon) {
    icon.className = isPassword ? 'fa-regular fa-eye-slash text-slate-400' : 'fa-regular fa-eye text-slate-400';
  }
}

// Auth Submission Simulation
function handleAuthSubmit(action) {
  if (action === 'login') {
    showToast('Đăng nhập thành công! Chào mừng bạn đến với Spotly Đà Nẵng.', 'success');
  } else {
    showToast('Đăng ký tài khoản thành công! Khám phá Đà Nẵng ngay thôi.', 'success');
  }
  setTimeout(() => switchView('view-home'), 800);
}

// Search Filter Handling (View 2)
function setBudgetFilter(value) {
  state.filters.budget = value;
  renderSearchResults();
}

function setLocationFilter(value) {
  state.filters.location = value;
  // Update location pills for Da Nang districts
  const options = ['near_me', 'haichau', 'sontra', 'nguhanhson', 'thanhkhe', 'other'];
  options.forEach(opt => {
    const el = document.getElementById(`filter-loc-${opt}`);
    if (el) {
      if (opt === value) {
        el.className = 'w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#E6F4F1] text-[#00897B] flex items-center gap-2 cursor-pointer transition-colors';
        const icon = el.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-circle-dot text-xs text-[#00897B]';
      } else {
        el.className = 'w-full text-left px-3 py-2 rounded-xl text-xs sm:text-sm text-slate-600 hover:bg-slate-100 flex items-center gap-2 cursor-pointer transition-colors';
        const icon = el.querySelector('i');
        if (icon) icon.className = 'fa-regular fa-circle text-xs text-slate-300';
      }
    }
  });
  renderSearchResults();
}

function togglePurposeFilter(purpose) {
  const idx = state.filters.purposes.indexOf(purpose);
  if (idx > -1) {
    state.filters.purposes.splice(idx, 1);
  } else {
    state.filters.purposes.push(purpose);
  }
  renderSearchResults();
}

function setRatingFilter(min) {
  state.filters.minRating = min;
  renderSearchResults();
}

// Home Search Bar Dropdown & Execution Handlers
function toggleHomeDropdown(name, event) {
  if (event) event.stopPropagation();
  const dropdowns = ['budget', 'location', 'purpose'];
  dropdowns.forEach(d => {
    const el = document.getElementById(`home-dropdown-${d}`);
    if (el) {
      if (d === name) {
        el.classList.toggle('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
}

function selectHomeBudget(value, label, event) {
  if (event) event.stopPropagation();
  state.filters.budget = value;
  const displayEl = document.getElementById('home-budget-display');
  if (displayEl) displayEl.textContent = label;
  const dropdown = document.getElementById('home-dropdown-budget');
  if (dropdown) dropdown.classList.add('hidden');
}

function selectHomeLocation(value, label, event) {
  if (event) event.stopPropagation();
  state.filters.location = value;
  const displayEl = document.getElementById('home-location-display');
  if (displayEl) displayEl.textContent = label;
  const dropdown = document.getElementById('home-dropdown-location');
  if (dropdown) dropdown.classList.add('hidden');
}

function selectHomePurpose(value, label, event) {
  if (event) event.stopPropagation();
  if (value === 'all') {
    state.filters.purposes = [];
  } else {
    state.filters.purposes = [value];
  }
  const displayEl = document.getElementById('home-purpose-display');
  if (displayEl) displayEl.textContent = label;
  const dropdown = document.getElementById('home-dropdown-purpose');
  if (dropdown) dropdown.classList.add('hidden');
}

function executeHomeSearch() {
  const homeInput = document.getElementById('home-search-input');
  const searchInput = document.getElementById('search-main-input');
  if (homeInput && searchInput) {
    const val = homeInput.value.trim();
    if (val) {
      state.searchQuery = val;
      searchInput.value = val;
    }
  }
  switchView('view-search');
}

// Close home dropdowns when clicking outside
document.addEventListener('click', () => {
  ['budget', 'location', 'purpose'].forEach(d => {
    const el = document.getElementById(`home-dropdown-${d}`);
    if (el) el.classList.add('hidden');
  });
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderHomeCards();
  renderSearchResults();
  renderPlaceDetails();

  // Search input clear button
  const searchClearBtn = document.getElementById('search-input-clear');
  const searchInput = document.getElementById('search-main-input');
  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      renderSearchResults();
      searchInput.focus();
    });
  }

  // Set default view
  switchView('view-home');
});
