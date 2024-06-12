import React, { ReactElement } from 'react'
import { exceriseCourseThumb } from '../assets/svgXml'
import { vw, vh } from '../assets/stylesheet'

export default function data() {
    interface ExerciseCourse {
        category: number,
        data: {
            category: number,
            name: string,
            time: number,
            image: string | ReactElement,
            description: string,
            stepDone: number,
            calories?: number,
            step: {
                name?: string,
                description: string,
                image: string | ReactElement,
            }[],
        }[]
    }
    interface Quiz {
        category: number,
        level: number,
        score: number,
        data: {
            question: string,
            options: string[],
            answer: number,
            lastAnswer: number | null,
            isDone: boolean,
        }[]
    }

    const exerciseCourse: ExerciseCourse[] = [
        {
            category: 1,
            data: [
                {
                    category: 1,
                    name: `Khởi động khuỷu tay`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `khuỷu tay được khởi động. Tránh các bong gân có thể xảy ra tại khuỷu tay. Ích lợi cho các động tác bơi sấp, bơi ếch`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Người đứng thẳng, hai chân rộng bằng vai, mặt hướng ra phía trước.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Giang 2 tay sang 2 bên sao cho, cánh tay vuông góc với thân người, cẳng tay buông thõng xuống, khuỷu tay vuông góc.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Từ từ thực hiện quay khuỷu tay theo hướng thuận chiều kim đồng hồ 15 lần. Sau đó dừng lại, giữ nguyên tư thế tay, xoay theo chiều ngược lại.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `lần này là ngược chiều kim đồng hồ 15 lần. Khởi động xong khủy tay.`,
                            image: exceriseCourseThumb,
                        },
                    ]
                },
                {
                    category: 1,
                    name: `Khởi động khớp vai`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `làm trơn tru vai. Sẽ tạo điều kiện cho bạn bơi thoải mái các động tác bơi sải, bơi ngửa mà không lo đau vai`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Người đứng thẳng, hai chân rộng bằng vai, mặt hướng ra phía trước.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Đưa 2 tay lên, khuỷu tay gấp lại sao cho khuỷu tay thì gấp mà bàn tay thì chụm lại chạm vào mỏm vai`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Bàn tay phải chạm vào vai phải, bàn tay trái chạm vào vai trái`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Từ từ thực hiện xoay khớp vai theo chiều thuận chiều kim đồng hồ và ngược chiều kim đồng hồ 15 lần`,
                            image: exceriseCourseThumb,
                        },
                    ]
                },
                {
                    category: 1,
                    name: `Khởi động cổ chân`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `giúp cổ chân linh hoạt. Bàn chân có thể cử động dễ dàng trong các hoạt động bơi, quẫy nước, đẩy nước. Cổ chân sẽ không bị đau khi có vận động đột ngột`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Người đứng thẳng, hai chân rộng bằng vai, hai tay chắp vào hông`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Khởi động từng chân. Đầu tiên khởi động chân phải`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Lấy chân trái làm trụ, đứng người chủ yếu trên chân trái. Bàn chân phải kiễng lên sao cho chỉ có mũi ngón cái bàn chân phải chạm đất.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Từ từ quay bàn chân phải trên trụ mũi ngón cái theo chiều thuận kim đồng hồ 15 lần. Sau đó dừng lại, đổi chiều quay theo ngược chiều kim đồng hồ, cũng 15 lần.`,
                            image: exceriseCourseThumb,
                        },
                    ]
                }
            ]
        },
        {
            category: 2,
            data: [
                {
                    category: 2,
                    name: `Khởi động đầu gối`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `Gối được khởi động, cơ đùi được kéo căng. Gối sẽ không bị đau khi bạn đạp nước. Khi cử động mạnh sẽ tránh bị bong gân, các chấn thương ở dây chằng trong gối`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Người đứng thẳng, hai chân rộng bằng vai, mặt nhìn ra trước`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Khởi động từng gối. Đầu tiên khởi động gối phải`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Đứng hơi nghiêng người về bên chân trái, tay trái chống hông, tay phải buông thõng. Khi đó chân phải có thể cử động tự do`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Bạn hãy duỗi chân phải ra phía trước, sau đó co chân phải về sau sao cho gối phải gấp lại, bàn chân đưa về mông, bày tay phải tóm lấy cổ chân phải để kéo gót chân phải chạm mông`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Sau đó tay phải lại thả ra và thực hiện lặp lại động tác này. Như vậy gối sẽ được gấp và duỗi ra. Làm như vậy 15 lần rồi đổi sang chân trái`,
                            image: exceriseCourseThumb,
                        },
                    ]
                },
                {
                    category: 2,
                    name: `Khởi động háng`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `khởi động háng làm cho hoạt động háng dễ dàng, khớp háng không bị đau khi bơi ếch, bơi ngửa. Kể cả khi bạn bơi kéo dài liên tục mông và háng cũng không bị đau.`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Người đứng thẳng, hai chân rộng bằng vai`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Khởi động háng phải trước. Giữ nguyên chân trái, bước chân phải lên phía trước 1 bước dài`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Từ từ hạ thấp người xuống, dồn trọng lực vào chân phải sao cho gối phải thì gấp lại vuông góc, người tiến ra trước, chân trái thì thẳng và duỗi ra sau.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Hai tay chống vào gối phải, nhún người lên xuống 3 lần, ấn sức nặng vào gối phải. Sau đó đổi sang chân trái. Làm như bên chân phải`,
                            image: exceriseCourseThumb,
                        },
                    ]
                },
                {
                    category: 2,
                    name: `Giãn cơ sau chân`,
                    time: 8,
                    image: exceriseCourseThumb,
                    description: `Đây là bài tập đơn giản, giúp kéo dãn cơ cho người tập luyện bơi lội. Bạn có thể thực hiện theo các trình tự sau để tránh các sự cố như chuột rút, đau nhức mỏi`,
                    stepDone: 0,
                    step: [
                        {
                            description: `Mở rộng hai chân bằng vai, hai tay đan lại với nhau.`,
                            image: exceriseCourseThumb,
                        },
                        {
                            description: `Gập lưng, thẳng chân và hai tay chạm đất trong 2 phút, làm khoảng 5 lần.`,
                            image: exceriseCourseThumb,
                        },
                    ]
                }
            ]
        }
    ]

    const quiz: Quiz[] = [
        {
            category: 1,
            level: 2,
            score: 0,
            data: [
                {
                    question: `Tốc độ của bơi ếch so với các kiểu bơi khác là?`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Có bao nhiêu kiểu bơi trong thể thao ngày nay?`,
                    options: [`2`, `3`, `4`, `5`],
                    answer: 2,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Kiểu bơi nào không có trong danh sách cách kiểu bơi được thi đấu?`,
                    options: [`Bơi ếch`, `Bơi chó`, `Bơi bướm`, `Bơi ngửa`],
                    answer: 1,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Trong bơi ếch, động tác nào là động tác chủ yếu tạo ra lực tiến cho cơ thể về phía trước?`,
                    options: [`Động tác đẩy tay`, `Động tác kéo tay`, `Động tác đẩy chân`, `Động tác kéo chân`],
                    answer: 2,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Trong tư thế thân người của bơi Ếch, góc độ của thân người so với mặt nước nằm ngang là bao nhiêu độ?`,
                    options: [`5-10`, `10-15`, `15-20`, `20-25`],
                    answer: 0,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Khi kết thúc giai đoạn “co chân" trong kĩ thuật chân ếch, góc độ giữa cẳng chân với mặt nước là bao nhiêu?`,
                    options: [`45`, `60`, `75`, `90`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Tần số nhịp tim lúc tĩnh của VĐV tập luyện bơi thường xuyên là bao nhiêu?`,
                    options: [`60-70 lần/phút`, `70-80 lần/phút`, `80-90 lần/phút`, `90-100 lần/phút`],
                    answer: 0,
                    lastAnswer: null,
                    isDone: false,
                },

            ],
        },
        {
            category: 1,
            level: 3,
            score: 0,
            data: [
                {
                    question: `Theo các tư liệu khảo cổ, bơi lội đã ra đời cách đây bao lâu`,
                    options: [`10.000 năm`, `7.000 năm`, `5.000 năm`, `3.000 năm`],
                    answer: 2,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Mục đích của bơi lội ở chế độ cộng sản nguyên thuỷ là gì`,
                    options: [`Phục vụ cho đi lại, kiếm sống và bảo vệ tính mạng`, `Vui chơi giải trí`, `Rèn luyện sức khoẻ`, `Phục vụ cho giai cấp bóc lột`],
                    answer: 0,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Để giảm bớt lực ma sát, khi bơi cần chú ý điều gì`,
                    options: [`Chọn chất liệu trơn mỏng làm áo và mũ bơi`, `Mặc đồ bơi chuyên dụng khi thi đấu`, `Thoa kem lên các phần hở trên cơ thể`, `tất cả đều đúng`],
                    answer: 0,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Tại giải Olympic trẻ thế giới năm 2014, VĐV Nguyễn Thị Ánh Viên của Việt Nam đã đoạt huy chương vàng ở nội dung nào?`,
                    options: [`50m tự do`, `100m tự do`, `50m ngửa`, `200m hỗn hợp`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Dung tích sống (VO2 max) ở nam giới là `,
                    options: [`Khoảng 3 lít`, `Khoảng 3,4 lít `, `Khoảng 4 lít`, `Khoảng 4,5 lít`],
                    answer: 1,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Tác dụng của bơi lội đối với củng cố và nâng cao sức khoẻ`,
                    options: [`Làm cho cơ thể thích nghi với sự thay đổi khí hậu bên ngoài`, `Phòng chữa 1 số bệnh về cảm lạnh`, `Phòng chữa 1 số bệnh về hình thái`, `Tất cả các ý trên`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
            ],
        },
        {
            category: 2,
            level: 1,
            score: 0,
            data: [
                {
                    question: `Trong kĩ thuật đạp nước chân ếch, hiệu quả giai đoạn “đạp chân” tốt phụ thuộc vào mấy yếu tố`,
                    options: [`2`, `3`, `4`, `5`],
                    answer: 1,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Trong kĩ thuật chân ếch, sau khi kết thúc đạp nước thì vị trí gót chân cách mặt nước bao nhiêu`,
                    options: [`10-20 cm`, `20-30cm`, `30-40cm`, `40-50cm`],
                    answer: 2,
                    lastAnswer: null,
                    isDone: false,
                },
            ],
        },
        {
            category: 3,
            level: 1,
            score: 0,
            data: [
                {
                    question: `Trong bơi ếch có mấy loại thở`,
                    options: [`1`, `2`, `3`, `4`],
                    answer: 1,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Trong bơi ếch, động tác thở được tiến hành khi nào`,
                    options: [`Tỳ nước`, `Quạt nước`, `Tư thế ban đầu`, `Duỗi tay`],
                    answer: 1,
                    lastAnswer: null,
                    isDone: false,
                },
            ],
        },
    ]

    let data = { exerciseCourse, quiz }
    return data
}