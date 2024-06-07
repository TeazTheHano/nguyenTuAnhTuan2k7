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
                    name: `Khởi động cánh tay`,
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
                }
            ]
        },
        {
            category: 2,
            data: [
                {
                    category: 2,
                    name: `Ép thân trên`,
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
                    category: 2,
                    name: `Ép thân dưới`,
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
                    category: 2,
                    name: `Ép cả thân`,
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
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
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
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
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
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },
                {
                    question: `Blah blah blah`,
                    options: [`Tốc độ nhanh nhất`, `Tốc độ chậm nhất`, `Tốc độ ngang với trườn sấp`, `Tốc độ ngang với bơi bướm`],
                    answer: 3,
                    lastAnswer: null,
                    isDone: false,
                },

            ],
        },
    ]

    let data = { exerciseCourse, quiz }
    return data
}