const blogPosts = [
    {
        id: 1,
        title: "Công ty trách nhiệm hữu hạn theo bảo lãnh",
        excerpt: "Tìm hiểu về mô hình công ty TNHH và các quy định pháp lý liên quan đến loại hình doanh nghiệp này",
        category: "company",
        categoryName: "Doanh nghiệp",
        image: "./images/Giấy chứng nhận đăng ký doanh nghiệp mặt trước.png",
        date: "01/03/2025",
        readTime: "5 phút",
        content: `
            <h2>Giới thiệu về công ty TNHH theo bảo lãnh</h2>
            <p>Công ty TNHH theo bảo lãnh là một loại hình doanh nghiệp đặc biệt, kết hợp những ưu điểm của công ty TNHH và công ty cổ phần...</p>
            
            <h3>Đặc điểm chính</h3>
            <ul>
                <li>Thành viên công ty có thể là tổ chức hoặc cá nhân</li>
                <li>Thành viên chịu trách nhiệm về các khoản nợ của công ty trong phạm vi số vốn cam kết góp</li>
                <li>Công ty có thể phát hành trái phiếu</li>
            </ul>

            <h3>Ưu điểm</h3>
            <ul>
                <li>Hạn chế rủi ro tài chính cho thành viên</li>
                <li>Dễ dàng huy động vốn</li>
                <li>Quản lý linh hoạt</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Lợi ích của chuyển đổi số cho doanh nghiệp vừa và nhỏ",
        excerpt: "Khám phá cách áp dụng công nghệ số để tối ưu hóa hoạt động và tăng hiệu quả kinh doanh",
        category: "tech",
        categoryName: "Công nghệ",
        image: "./images/Đối tác ESAT bán thiết bị điện tử.png",
        date: "28/02/2025",
        readTime: "7 phút",
        content: `
            <h2>Chuyển đổi số là gì?</h2>
            <p>Chuyển đổi số là quá trình tích hợp công nghệ số vào mọi lĩnh vực của doanh nghiệp...</p>
            
            <h3>Lợi ích chính</h3>
            <ul>
                <li>Tăng hiệu quả vận hành</li>
                <li>Giảm chi phí hoạt động</li>
                <li>Nâng cao trải nghiệm khách hàng</li>
                <li>Mở rộng thị trường</li>
            </ul>

            <h3>Các bước thực hiện</h3>
            <ol>
                <li>Đánh giá hiện trạng</li>
                <li>Xây dựng chiến lược</li>
                <li>Lựa chọn giải pháp</li>
                <li>Triển khai và đào tạo</li>
            </ol>
        `
    },
    {
        id: 3,
        title: "Hướng dẫn lập báo cáo Đánh giá tác động môi trường",
        excerpt: "Các bước chi tiết và lưu ý quan trọng khi thực hiện báo cáo ĐTM cho dự án",
        category: "environment",
        categoryName: "Môi trường",
        image: "./images/Bằng thạc sĩ bà Trần Kim Tiểu Vân Phương.png",
        date: "25/02/2025",
        readTime: "10 phút",
        content: `
            <h2>Báo cáo ĐTM là gì?</h2>
            <p>Báo cáo đánh giá tác động môi trường là công cụ quan trọng trong quản lý môi trường...</p>
            
            <h3>Nội dung chính của báo cáo</h3>
            <ul>
                <li>Thông tin chung về dự án</li>
                <li>Điều kiện môi trường tự nhiên và kinh tế-xã hội</li>
                <li>Đánh giá tác động môi trường</li>
                <li>Biện pháp giảm thiểu</li>
            </ul>

            <h3>Quy trình thực hiện</h3>
            <ol>
                <li>Khảo sát thực địa</li>
                <li>Thu thập số liệu</li>
                <li>Phân tích đánh giá</li>
                <li>Đề xuất giải pháp</li>
            </ol>
        `
    }
];

const partners = [
    {
        name: "Cao Đẳng CEA",
        logo: "./images/Đối Tác Cao Đẳng CEA.png",
        description: "Đối tác đào tạo nguồn nhân lực"
    },
    {
        name: "ESAT",
        logo: "./images/Đối tác ESAT bán thiết bị điện tử.png",
        description: "Đối tác cung cấp thiết bị điện tử"
    },
    {
        name: "Phòng khám Ngọc Nhân",
        logo: "./images/Đối tác phòng khám đa khoa Ngọc Nhân.png",
        description: "Đối tác trong lĩnh vực y tế"
    },
    {
        name: "Tân Huê Viên",
        logo: "./images/Đối tác Tân Huê Viên.png",
        description: "Đối tác cung cấp giải pháp"
    }
];

const teamMembers = {
    environment: [
        {
            name: "Trần Kim Tiêu Vân Phương",
            title: "Thạc sĩ Quản lý tài nguyên và môi trường",
            image: "./images/Bằng thạc sĩ bà Trần Kim Tiểu Vân Phương.png",
            role: "Giám đốc"
        },
        {
            name: "Nguyễn Thái Ân",
            title: "Thạc sĩ Quản lý tài nguyên và môi trường",
            image: "./images/Bằng thạc sĩ ông Nguyễn Thái Ân.png",
            role: "Chuyên gia môi trường"
        },
        {
            name: "Trương Ngọc Yên",
            title: "Thạc sĩ Quản lý tài nguyên và môi trường",
            image: "./images/Bằng thạc sĩ ông Trương Ngọc Yên.png",
            role: "Chuyên gia môi trường"
        },
        {
            name: "Huỳnh Hữu Lộc",
            title: "Kỹ sư Quản lý môi trường",
            image: "./images/Bằng Kỹ Sư ông Huỳnh Hữu Lộc.png",
            role: "Kỹ sư môi trường"
        }
    ],
    it: [
        {
            name: "Lê Thiên Tài",
            title: "Kỹ sư Công nghệ thông tin",
            image: "./images/Bằng Kỹ Sư Ông Lê Thiên Tài.png",
            role: "Trưởng phòng CNTT"
        },
        {
            name: "Lê Thành Nam",
            title: "Kỹ sư Công nghệ thông tin",
            image: "./images/Bằng Kỹ Sư Ông Lê Thành Nam.png",
            role: "Chuyên viên phát triển phần mềm"
        }
    ]
};

const companyStory = {
    title: "Câu chuyện của chúng tôi",
    content: `
        <p>Phuong Viet IT&E được thành lập vào năm 2020 với tầm nhìn trở thành đơn vị tiên phong trong việc kết hợp công nghệ thông tin và giải pháp môi trường tại Việt Nam.</p>
        
        <p>Xuất phát từ nhận thức về tầm quan trọng của công nghệ trong việc giải quyết các vấn đề môi trường, chúng tôi đã tập hợp một đội ngũ chuyên gia có trình độ cao trong cả hai lĩnh vực.</p>
        
        <p>Qua hơn 3 năm hoạt động, chúng tôi đã thực hiện thành công nhiều dự án quan trọng, từ phát triển phần mềm quản lý doanh nghiệp đến tư vấn đánh giá tác động môi trường cho các dự án lớn.</p>
        
        <p>Với phương châm "Tín - Tâm - Trí - Nhân", chúng tôi luôn đặt chất lượng dịch vụ và sự hài lòng của khách hàng lên hàng đầu, đồng thời không ngừng đổi mới và phát triển để đáp ứng nhu cầu ngày càng cao của thị trường.</p>
    `,
    milestones: [
        {
            year: 2020,
            title: "Thành lập công ty",
            description: "Bắt đầu hành trình với 5 thành viên đầu tiên",
            image: "./images/Giấy chứng nhận đăng ký doanh nghiệp mặt trước.png"
        },
        {
            year: 2021,
            title: "Mở rộng dịch vụ",
            description: "Phát triển thêm mảng tư vấn môi trường"
        },
        {
            year: 2022,
            title: "Phát triển đội ngũ",
            description: "Tăng trưởng lên 15 chuyên gia"
        },
        {
            year: 2023,
            title: "Dự án lớn",
            description: "Triển khai các dự án quy mô tỉnh",
            image: "./images/Giấy chứng nhận đăng ký doanh nghiệp mặt sau.png"
        }
    ]
};