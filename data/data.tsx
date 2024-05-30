import { View, Text } from 'react-native'
import React, { ReactElement } from 'react'
import { exceriseCourseThumb } from '../assets/svgXml'
import { vw, vh } from '../assets/stylesheet'

export default function data() {
    interface ExerciseCourse {
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
    }
    interface Quiz {
        question: string,
        options: string[],
        answer: number,
        level: number,
        score: number,
        isDone: boolean,
    }

    const exerciseCourse: ExerciseCourse[] = [
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
            name: `Khởi động khuỷu chân`,
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

    const quiz: Quiz[] = [
        {
            question: `Câu hỏi`,
            options: [`A`, `B`, `C`, `D`],
            answer: 0,
            level: 1,
            score: 10,
            isDone: false,
        },
    ]

    let data = { exerciseCourse, quiz }
    return data
}