# Spotly - Ứng Dụng Khám Phá Địa Điểm Quanh Bạn (Local Place Discovery Web App)

Spotly là ứng dụng web hiện đại giúp người dùng dễ dàng tìm kiếm, khám phá các quán cà phê, quán ăn, trà sữa và địa điểm vui chơi xung quanh mình với giao diện tinh tế, hiện đại và chuẩn xác theo mockup thiết kế.

---

## 🎨 Design System & Visual Identity

- **Tên thương hiệu**: Spotly
- **Biểu tượng (Logo)**: Pin bản đồ màu trắng trên nền tròn xanh ngọc Emerald / Teal (`#00897B`).
- **Màu sắc chủ đạo**:
  - `Primary Teal/Emerald`: `#00897B` (Hover: `#00796B`)
  - `Dark Accent / Footer`: Rừng nhiệt đới trầm `#064E3B`
  - `Soft Mint Accent`: `#E6F4F1`
  - `Neutral Background`: `#F8FAFC`
  - `Card Background`: `#FFFFFF`
  - `Border / Dividers`: `#E2E8F0` / `#F1F5F9`
  - `Rating Stars`: `#F59E0B` (Amber 500)
- **Typography**: Google Font **Be Vietnam Pro** (Hỗ trợ tiếng Việt sắc nét, hiện đại, tối ưu cho UI/UX).
- **Hệ thống Icon**: FontAwesome 6 & SVG nội bộ tối ưu hóa hiệu năng và độ nét.

---

## 📱 5 Màn hình chính (Được tái hiện chính xác theo Wireframe / Mockup):

### 1. Trang chủ (Home)
- **Header**: Logo Spotly, Menu Khám phá, Địa điểm, Yêu thích, nút tìm kiếm nhanh và Avatar người dùng.
- **Hero Banner**: Nền quán cà phê ấm cúng với lớp phủ tối tinh tế, tiêu đề *"Đi đâu hôm nay?"*, phụ đề *"Ăn ngon • Gặp bạn • Khám phá cuộc sống"*.
- **Bộ lọc tìm kiếm nổi (Floating Card)**:
  - Thanh tìm kiếm: *"Tìm quán ăn, cà phê, địa điểm vui chơi..."*
  - 4 thông số: Ngân sách (Tất cả ∨), Vị trí (Đà Nẵng ∨), Mục đích (Tất cả ∨) và nút bấm **"Tìm kiếm"** (chuyển ngay sang trang kết quả).
- **Địa điểm gợi ý cho bạn**: 4 thẻ địa điểm thực tế tại Đà Nẵng:
  1. *The Coffee House* (4.7 ★ • 80 Pasteur, Q. Hải Châu, Đà Nẵng • 1.2 km • 50k - 100k)
  2. *Bánh Mì Như Lan* (4.6 ★ • 62 Trưng Nữ Vương, Q. Hải Châu, Đà Nẵng • 1.5 km • 20k - 50k)
  3. *Highlands Coffee* (4.6 ★ • 74 Bạch Đằng ven sông Hàn, Q. Hải Châu, Đà Nẵng • 2.1 km • 50k - 100k)
  4. *Phúc Long* (4.5 ★ • 241 Nguyễn Văn Linh, Q. Thanh Khê, Đà Nẵng • 2.4 km • 50k - 100k)
- **Banner quà tặng / Promo CTA**: Minh họa bạn bè gặp gỡ + *"Tạo kỷ niệm đẹp cùng bạn bè tại những địa điểm tuyệt vời!"* + Nút *"Khám phá ngay →"*.
- **Footer**: Nền xanh đậm `#064E3B`, thông tin liên hệ, mạng xã hội (Facebook, Instagram, YouTube, TikTok), liên kết chính sách và bản quyền 2025.

### 2. Trang kết quả tìm kiếm (Search Results)
- **Thanh tìm kiếm trên cùng**: Tự động điền từ khóa `"cà phê"`, nút xóa `X`, các nhãn lọc nhanh: *"Ngân sách: 20k - 60k ∨"*, *"Vị trí: Đà Nẵng ∨"*, *"Mục đích: Mặc định ∨"*.
- **Layout 2 cột**:
  - **Cột trái (Bộ lọc)**:
    - *Ngân sách (VNĐ)*: &lt; 20k, 20k - 60k (chọn sẵn), 50k - 80k, &gt; 80k.
    - *Vị trí*: Gần tôi (Đà Nẵng), Quận Hải Châu, Quận Sơn Trà, Quận Ngũ Hành Sơn, Quận Thanh Khê, Khu vực khác.
    - *Mục đích*: Checkbox Học tập (checked), Gặp gỡ, Ăn uống.
    - *Đánh giá*: Từ 4.5 trở lên, Từ 4.0 trở lên, Từ 3.5 trở lên.
  - **Cột phải (Danh sách)**:
    - Tiêu đề số lượng kết quả + Dropdown sắp xếp.
    - Danh sách thẻ ngang gồm các quán nổi tiếng tại Đà Nẵng: *The Coffee House*, *Highlands Coffee Bạch Đằng*, *Bánh Mì Như Lan Trưng Nữ Vương*, *Phúc Long Nguyễn Văn Linh*, *The Alley Nguyễn Văn Thoại (gần biển Mỹ Khê)*, *Út Tịch Cafe*, *43 Factory Coffee Roaster*.
    - Nút tim yêu thích tương tác bật/tắt động.
    - Nhấp vào bất kỳ quán nào sẽ chuyển ngay đến Trang chi tiết!

### 3. Trang chi tiết địa điểm (Place Details)
- **Thư viện ảnh (Hero Gallery)**:
  - 1 ảnh lớn chất lượng cao với thanh điều hướng mũi tên trái/phải, nút chia sẻ, nút yêu thích, và nhãn hiển thị `"1/6"`.
  - Hàng 6 ảnh thumbnail bên dưới, cho phép click để đổi ảnh chính mượt mà.
- **Tiêu đề thông tin**: Tên quán, số sao đánh giá (4.7 ★), khoảng giá (20k - 60k), tag phân loại (`Cà phê`, `Phù hợp: Học tập >`), địa chỉ chi tiết và nút **"Chỉ đường"**.
- **Tabs điều hướng**: Tổng quan, Thực đơn, Đánh giá, Ảnh.
- **Nội dung Tab Tổng quan**:
  - Đoạn giới thiệu chuỗi quán.
  - Tiện ích nổi bật: Wifi miễn phí, Điều hòa, Chỗ đỗ xe, Thanh toán thẻ.
  - Thực đơn nổi bật: Cà phê sữa đá (45.000đ), Trà đào cam sả (60.000đ), Bánh Tiramisu (55.000đ).
  - Đánh giá nổi bật: Avatar người dùng, ngày đăng, nội dung nhận xét.
  - Nút bấm lớn dưới cùng: **"Viết đánh giá"** (Dẫn trực tiếp tới Trang đánh giá).

### 4. Trang phản hồi / Đánh giá (Review / Feedback)
- **Banner đầu trang**: Minh họa bạn trẻ cầm điện thoại + *"Chia sẻ trải nghiệm của bạn"*.
- **Bộ chọn số sao**: 1 đến 5 sao tương tác mượt mà + hiển thị điểm `5/5`.
- **Ô nhận xét**: Textarea kèm bộ đếm ký tự trực tiếp `0/500`.
- **Tải ảnh lên**: Khu vực Dropzone nét đứt kèm icon máy ảnh + tính năng chọn ảnh từ máy thật và hiển thị ảnh xem trước có nút xóa.
- **Câu hỏi trắc nghiệm**: *"Bạn đã muốn đề xuất các địa điểm này cho bạn bè không?"* với 3 nút `Có`, `Không` (active), `Có thể`.
- **Gắn thẻ đánh giá**: `Không gian`, `Thức ăn`, `Đồ uống`, `Phục vụ` có thể bật/tắt linh hoạt với dấu tick `✓`.
- **Nút gửi đánh giá**: Hiển thị thông báo Toast thành công và tự động cập nhật đánh giá mới vào dữ liệu!
- **Thẻ cảm ơn**: Biểu tượng trái tim + thông điệp tri ân người dùng.

### 5. Đăng nhập / Đăng ký (Auth Modal/Screen)
- **Thẻ xác thực chuẩn mockup**:
  - Logo Spotly, câu chào *"Chào mừng bạn trở lại!"*.
  - Tab chuyển đổi giữa **Đăng nhập** và **Đăng ký**.
  - Form Đăng nhập: Email/SĐT, Mật khẩu có nút *"Quên mật khẩu?"*, nút Đăng nhập.
  - Đăng nhập mạng xã hội: 3 nút biểu tượng **Google**, **Facebook**, **Apple**.
  - Form Đăng ký: Họ và tên, Email, Mật khẩu có nút ẩn/hiện mật khẩu (eye icon).

---

## 🚀 Hướng Dẫn Chạy Thử Ứng Dụng

Ứng dụng được xây dựng hoàn toàn bằng chuẩn web tiêu chuẩn (**HTML5 + Tailwind CSS + Vanilla JS**), không yêu cầu build tools phức tạp hay dependencies nặng nề.

### Cách 1: Mở trực tiếp
Mở file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox):
```bash
start index.html
```

### Cách 2: Chạy qua Python Local Server
Tại thư mục `spotly-app`:
```bash
python -m http.server 8080
```
Sau đó truy cập: `http://localhost:8080` trên trình duyệt.

---

## 💡 Điểm Nổi Bật Về Trải Nghiệm (UX)
1. **Thanh Demo ToolBar**: Trên cùng trang web có thanh điều hướng nhanh giúp chuyển đổi ngay lập tức giữa 5 màn hình tương ứng với 5 ảnh mockup.
2. **Luồng người dùng tự nhiên (Full Flow)**:
   - Từ Trang chủ -> Click "Tìm kiếm" -> Xem kết quả tìm kiếm.
   - Từ Danh sách tìm kiếm -> Click quán -> Mở chi tiết địa điểm.
   - Từ Chi tiết -> Click "Viết đánh giá" -> Mở trang đánh giá.
   - Click Avatar -> Mở trang Đăng nhập / Đăng ký.
3. **Phản hồi thời gian thực**: Bộ lọc giá, địa điểm, mục đích, sao đánh giá, gallery ảnh, tải ảnh và lưu yêu thích đều hoạt động mượt mà.
