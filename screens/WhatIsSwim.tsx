import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { ReactElement } from 'react'
import colorStyle, { componentStyle, Gradient1, Gradient2 } from '../assets/componentStyleSheet'
import styles, { vw } from '../assets/stylesheet'
import { marginBottomForScrollView, NavNavigation, UlList } from '../assets/component'
import { Nunito16Bold, Nunito18Bold, Signika20Bold, Signika24Bold } from '../assets/Class'
import { homeBoardingPeople, swim1, WhatIsSwim1, WhatIsSwim2, WhatIsSwim3, WhatIsSwim4, WhatIsSwim5, WhatIsSwim6, WhatIsSwim7, WhatIsSwim9 } from '../assets/svgXml'
import { Svg, SvgXml } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

export default function WhatIsSwim() {
    const navigation = useNavigation()
    const [currentScreen, setCurrentScreen] = React.useState<number>(0)

    interface dataItem {
        title: string,
        subTittle?: string | string[],
        content: string | any[],
        imgAddress: Array<ReactElement>,
        roleImgAddress?: Array<ReactElement>,
        bullet?: string,
        subBullet?: string,
    }


    // declare data as an array of dataItem
    let data: dataItem[] = [
        {
            title: 'Bơi lội là gì?',
            content: `Bơi lội là môn thể thao dưới nước, nhờ vào lực đẩy của nước và sự vận động của toàn thân, đặc biệt là chân và tay mà người bơi có thể di chuyển cơ thể dưới nước với một tốc độ nhất định. Bơi lội là môn thể thao dành cho mọi người ở mọi lứa tuổi và không quá tốn kém, giúp bạn cải thiện được sức khỏe, thậm chí là tinh thần.`,
            imgAddress: [WhatIsSwim1(vw(60), vw(50))],
        },
        {
            title: 'Lợi ích của bơi lội',
            content: `Bơi lội được đánh giá là một hình thức vận động cơ thể tốt nhất. Khi tập luyện, có thể tác động đến hầu hết các cơ mà lại không phải chịu đựng bất kỳ tác động gây tổn hại nào đến khớp. Ngoài ra, bơi lội thường được các vận động viên bổ sung vào chương trình tập luyện để giữ sức bền và giữ dáng khi hồi phục chấn thương. \nNếu tập luyện bơi lội thường xuyên sẽ dần có được sức mạnh cơ bắp trên toàn bộ cơ thể. Khi bơi dưới nước cần phải phối hợp cách sử dụng nhiều nhóm cơ với nhau để có thể di chuyển cơ thể từ đó làm cho toàn thân vận động, nâng cao sức mạnh, sức bền.`,
            imgAddress: [WhatIsSwim1(vw(60), vw(50))],
        },
        {
            title: `Lợi ích với trẻ em`,
            content: [
                `Phòng tránh đuối nước`,
                `Phát triển sự tự tin`,
                `Cải thiện sự tập trung`,
                `Kích thích phát triển trí não`,
                `Hỗ trợ sức khoẻ tim mạch`,
                `Cải thiện sức bên`,
                `Tăng chiều cao`,
                `Giảm cân cho trẻ béo phì`,
                `Giảm nguy cơ chấn thương`,
                `Massage cơ thể`,
                `Giúp trẻ bớt căng thẳng`,
                `Hỗ trợ tiêu hoá`,
                `Cải thiện giấc ngủ`,
                `Cải thiện kĩ năng xã hội`,
            ],
            imgAddress: [WhatIsSwim2(vw(60), vw(50))],
            bullet: `•`,
            roleImgAddress: [WhatIsSwim3(vw(25), vw(50)), WhatIsSwim4(vw(25), vw(50))],
        },
        {
            title: `Lợi ích với người già`,
            content: [
                `Tránh nguy cơ mắc bệnh tim mạch, huyết áp`,
                `Giúp gia tăng lượng máu và oxy, giúp duy trì huyết áp ổn định, tránh nguy cơ đột quỵ hay đau tim,… `,
                `Khi bơi, cơ thể sẽ được làn nước massage, giúp thư giãn tâm trí và thư thái. Qua đó, giải toả các áp lực và căng thẳng của cuộc sống. `,
                `Giúp phòng ngừa các bệnh liên quan đến hệ thần kinh.`,
            ],
            imgAddress: [WhatIsSwim2(vw(60), vw(50))],
            bullet: `•`,
            roleImgAddress: [WhatIsSwim5(vw(25), vw(50)), WhatIsSwim6(vw(25), vw(50))],
        },
        {
            title: `Các tai nạn xảy ra khi bơi`,
            subTittle: [
                `Chuột rút`,
                `Chuột rút là gì: Là cơn co mạnh, đau và thắt chặt các cơ, thường đến đột ngột và kéo dài từ vài giây cho đến vài phút. Chuột rút thường xảy ra ở chân.`,],
            content: [
                `Nguyên nhân`,
                [
                    `Có nhiều nguyên nhân gây tình trạng chuột rút khi bơi, người bệnh có thể có một hoặc nhiều nguyên nhân kết hợp gồm:`,
                    `Thiếu Magie do chế độ ăn uống kém hoặc mất nước, mất cân bằng điện giải do bênh lý.`,
                    `Thiếu ngủ`,
                    `Không khởi động kỹ trước khi bơi, việc làm ấm cơ thể và kéo giãn cơ đúng cách rất quan trọng để cơ thể làm quen trước khi xuống nước `,
                    `Bơi khi cơ thể mệt mỏi, không ăn hoặc không uống.`
                ],
                `Cách phòng chống`,
                [
                    `Bổ sung Magie`,
                    `Với vận động bơi lội nói chung và những người thường xuyên bị chuột rút nói riêng, bổ sung tăng cường Magie là cần thiết. Trung bình trong cơ thể mỗi người sẽ có khoảng 20-25mg, trong đó 27% có mặt ở các cơ. Chế độ dinh dưỡng thiếu hụt Magie là nguyên nhân khiến cơ dễ bị căng cứng, chuột rút xảy ra cả khi vận động, bơi lội lẫn khi ngủ.`,
                    `Bổ sung nước`,
                    `Khởi động kĩ`,
                ],
                `Hướng dẫn xử lí khi bị chuột rút`,
                [
                    `Với các cách trên, bạn có thể phòng ngừa được cơn chuột rút khi bơi, tuy nhiên nó vẫn có thể xảy ra. Do đang trong nước và trạng thái vận động, chuột rút gây đau đớn, không thể cử động nên khiến người bệnh hoảng loạn. Nếu không giữ bình tĩnh và xử lý đúng cách, chứng chuột rút này có thể khiến bạn bị tai nạn vận động, đe dọa đến tính mạng.`,
                    `Nếu bạn đang bơi trong bể, hãy kêu cứu nhờ đến sự trợ giúp của người xung quanh. Nếu không có ai, hãy cố gắng bơi bằng bên chân và tay còn lại đến thành hồ, bám chắc vào thành hoặc phao để lên bờ. Sau đó, dùng tay xoa bóp sẽ giúp giảm đau đớn và co thắt cơ. Nếu có bồn nước nóng, hãy ngâm chân và toàn thân để nhiệt độ giúp cơ bắp thư giãn.`,
                    `Nếu bạn đang bơi trong vùng nước mở và không có người trợ giúp, trước hết hãy bình tĩnh. Hít một hơi thật sâu và lặn xuống nước, dùng tay xoa bóp chân bị chuột rút. Khi chứng chuột rút qua đi, bạn sẽ có thể cử động và bơi vào bờ.`,
                    `Nắm được các thông tin cơ bản chuột rút bắp chân khi bơi sẽ giúp bạn tránh gặp chứng khó chịu, phiền toái này và có cách xử lý đúng để tránh khỏi nguy hiểm.`,
                ],
                `Hướng dẫn xử lí khi bị chuột rút`,
                [
                    `Với các cách trên, bạn có thể phòng ngừa được cơn chuột rút khi bơi, tuy nhiên nó vẫn có thể xảy ra. Do đang trong nước và trạng thái vận động, chuột rút gây đau đớn, không thể cử động nên khiến người bệnh hoảng loạn. Nếu không giữ bình tĩnh và xử lý đúng cách, chứng chuột rút này có thể khiến bạn bị tai nạn vận động, đe dọa đến tính mạng.`,
                    `Nếu bạn đang bơi trong bể, hãy kêu cứu nhờ đến sự trợ giúp của người xung quanh. Nếu không có ai, hãy cố gắng bơi bằng bên chân và tay còn lại đến thành hồ, bám chắc vào thành hoặc phao để lên bờ. Sau đó, dùng tay xoa bóp sẽ giúp giảm đau đớn và co thắt cơ. Nếu có bồn nước nóng, hãy ngâm chân và toàn thân để nhiệt độ giúp cơ bắp thư giãn.`,
                    `Nếu bạn đang bơi trong vùng nước mở và không có người trợ giúp, trước hết hãy bình tĩnh. Hít một hơi thật sâu và lặn xuống nước, dùng tay xoa bóp chân bị chuột rút. Khi chứng chuột rút qua đi, bạn sẽ có thể cử động và bơi vào bờ.`,
                    `Nắm được các thông tin cơ bản chuột rút bắp chân khi bơi sẽ giúp bạn tránh gặp chứng khó chịu, phiền toái này và có cách xử lý đúng để tránh khỏi nguy hiểm.`,
                ]
            ],
            imgAddress: [WhatIsSwim7(vw(60), vw(50))],
            roleImgAddress: [WhatIsSwim4(vw(25), vw(50))],
        },
        {
            title: `Các tai nạn xảy ra khi bơi`,
            subTittle: `Đuối nước`,
            content: [
                `Khái niệm và nguyên nhân`,
                [
                    `Là một dạng của ngạt, do nước bị hít vào phổi, hoặc tắc đường thở do co thắt thanh quản khi nạn nhân ở trong nước. Đây là một tai nạn hay gặp, xảy ra trong khi đi bơi, đi thuyền và trong hoạt động dưới nước.`,
                    `Khi bị ngạt nước nạn nhân bị ngừng thở, tim đập chậm lại do phản xạ. Tình trạng ngừng thở tiếp tục dẫn đến thiếu oxy máu, gây tăng nhịp tim, huyết áp. Nếu ngừng thở tiếp tục kéo dài trong khoảng từ 20 giây cho đến 2-5 phút thì đạt đến ngưỡng thì nhịp thở lại xuất hiện khiến cho nước bị hít vào gây co thắt thanh quản tức thì, xuất hiện cơn ngừng thở lần 2, sau đó là các nhịp thở bắt buộc khiến cho nước, dị vật bị hít vào phổi. Hậu quả là nhịp tim chậm dần chậm lại, rối loạn nhịp, ngừng tim và tử vong.`,
                ],
                `Cách sơ cứu khi đuối nước`,
                [
                    `Sơ cứu tại chỗ và đúng kỹ thuật là quan trọng nhất, quyết định sự sống còn hay di chứng não của nạn nhân.`,
                    `Để cứu sống nạn nhân ngạt nước phải ngăn chặn kịp thời các tiến trình trên, tốt nhất là ngay từ khi có cơn ngừng thở đầu tiên tức là trong vòng 1- 4 phút đầu tiên khi bị chìm trong nước, đồng thời xử lý tốt các chấn thương kèm theo (đặc biệt là chấn thương đầu cổ và cột sống).`,
                ],
                `Cách sơ cứu đúng như sau:`,
                [
                    `Nhanh chóng đưa nạn nhân ra khỏi mặt nước bằng cách đưa cánh tay, cây sào dài cho nạn nhân nắm, ném phao hoặc vớt nạn nhân lên`,
                    `Đặt nạn nhân nằm chỗ khô ráo, thoáng khí`,
                    `Nếu nạn nhân bất tỉnh hãy kiểm tra xem nạn nhân còn thở hay không bằng cách quan sát sự di động của lồng ngực:`,
                    [
                        `Nếu lồng ngực không di động tức là nạn nhân ngưng thở, hãy tiến hành ấn tim ngoài lồng ngực ở nửa dưới xương ức. Phối hợp ấn tim và thổi ngạt theo tỉ lệ 15/2 (2 cấp cứu viên) hoặc 30/2 (1 cấp cứu viên) trong 2 phút rồi đánh giá lại xem nạn nhân có thở lại được không? Môi có hồng không? Có phản ứng khi lay gội kích thích đau không? Nếu không và phải tiếp tục các động tác cấp cứu này ngay cả trên đường chuyển nạn nhân tới cơ sở y tế.`,
                        `Nếu nạn nhân còn tự thở, hãy đặt nạn nhân ở tư thế an toàn là nằm nghiêng một bên để chất nôn dễ thoát ra ngoài nếu nạn nhân nôn ói`,
                    ],
                    `Cởi bỏ quần áo ướt và giữ ấm bằng cách đắp lên người nạn nhân bằng chăn hay một tấm khăn khô`,
                    `Nhanh chóng đưa nạn nhân đến cơ sở y tế ngay cả khi nạn nhân có vẻ như bình thường hoặc đã hồi phục hoàn toàn sau sơ cứu vì nguy cơ khó thở thứ phát có thể xảy ra vài giờ sau ngạt nước`,
                ],
            ],
            imgAddress: [WhatIsSwim9(vw(60), vw(50))],
        }
    ]

    function stepScreen(currentScreen: number, data: dataItem[]) {
        return (
            <View style={[styles.flex1]}>
                <View style={[styles.positionAbsolute, styles.flexColStartCenter, styles.h100, styles.gap8vw, { zIndex: 2 }]}>
                    {data[currentScreen].roleImgAddress ? data[currentScreen].roleImgAddress.map((item, index) => {
                        return (
                            <View key={index}>{item}</View>
                        )
                    }) : homeBoardingPeople(vw(30), vw(50))}</View>
                <View style={[componentStyle.outerGlowL1T1White, styles.flex1, styles.borderRadius16, { width: '75%', transform: [{ translateX: vw(22) }], }]}>
                    <Gradient2 style={[styles.flexColBetweenCenter, styles.gap3vw, styles.borderRadius16, styles.flex1, styles.paddingH5vw, styles.paddingV4vw,]}>
                        <Signika24Bold style={{ color: colorStyle.main3 }}>{data[currentScreen].title}</Signika24Bold>
                        {data[currentScreen].subTittle ? <Nunito18Bold style={{ color: colorStyle.white }}>{data[currentScreen].subTittle}</Nunito18Bold> : null}
                        {UlList(data[currentScreen].content, Nunito18Bold, Nunito18Bold, data[currentScreen].bullet, data[currentScreen].subBullet, vw(2))}
                        <View style={[styles.flexRowBetweenCenter, styles.gap2vw]}>
                            {data[currentScreen].imgAddress ? <View>{data[currentScreen].imgAddress}</View> : null}
                        </View>
                    </Gradient2>
                </View>
            </View>
        )
    }

    return (
        <Gradient2 style={[styles.flex1]}>
            <SafeAreaView style={[styles.flex1,]}>
                {NavNavigation('Trang chủ')}
                <ScrollView style={[styles.flex1, styles.paddingH4vw, styles.paddingV4vw, { backgroundColor: colorStyle.fillBlur }]}>
                    <View>
                        {stepScreen(currentScreen, data)}
                    </View>
                    {marginBottomForScrollView()}
                </ScrollView>

                <View style={[styles.flexRowBetweenCenter, styles.paddingH10vw, styles.gap8vw, styles.paddingV4vw]}>
                    <TouchableOpacity
                        onPress={() => { setCurrentScreen(currentScreen - 1) }}>
                        {
                            currentScreen === 0 ? null :
                                <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw, { width: vw((100 - 20 - 5 - 8) / 2) }]}>
                                    <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>Quay lại</Nunito16Bold>
                                </Gradient1>
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { currentScreen == data.length - 1 ? navigation.goBack() : setCurrentScreen(currentScreen + 1) }}>
                        <Gradient1 style={[styles.paddingV2vw, styles.paddingH10, styles.borderRadius3vw, { width: vw((100 - 20 - 5 - 8) / 2) }]}>
                            <Nunito16Bold style={[styles.textCenter, { color: colorStyle.white }]}>
                                {currentScreen === data.length - 1 ? 'Trở về' : 'Tiếp theo'}
                            </Nunito16Bold>
                        </Gradient1>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Gradient2>
    )
}