import { Platform, StyleSheet, View } from 'react-native';
import { vw, vh, vmax, vmin } from './stylesheet';
import { Component, ReactNode } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const colorStyle = StyleSheet.create<any>({
    white: '#FFFFFF',
    grey: '#ADADAD',
    darkGrey: '#585858',
    black: '#252525',
    main1: '#131C2E',
    main2: '#2D424C',
    main3: '#A5DEDF',
    main4: '#438CAF',
    main5: '#DBB906',
    fillBlur: 'rgba(239, 239, 239, 0.2)',
});

export default colorStyle;

export const componentStyle = StyleSheet.create<any>({
    // input 
    textInput: { fontFamily: 'Nunito-Bold', fontSize: vw(5), color: colorStyle.main3, backgroundColor: 'rgba(0,0,0,0)', borderRadius: vw(2), width: vw(60) },
    textInputEdit: { fontFamily: 'Nunito-Regular', fontSize: vw(4), color: 'black', backgroundColor: 'white', borderRadius: vw(2), width: vw(60), paddingHorizontal: vw(2), paddingVertical: vw(0.5), },
    outerGlowL1T1White: {
        shadowOffset: { width: -1, height: -1 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowColor: '#ccc',
        elevation: 1,
        // padding: vw(2),
        // Add platform-specific styles for Android
        ...Platform.select({
            android: {
                elevation: 10,
                shadowOffset: { width: 1, height: -1 },
                shadowOpacity: 1,
                shadowRadius: 10,

            },
        }),
    },
});

export class Gradient1 extends Component<{ children: ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;
        return (
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#85C5C9', '#38828F', '#285866']}
                locations={[0, 0.6, 1]}
                style={[style]}
            >
                {children}
            </LinearGradient>
        );
    }
}

export class Gradient2 extends Component<{ children: ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                colors={['#22384F', '#0D0A2D', '#172A47']}
                locations={[0, 0.63, 1]}
                style={[style]}
            >
                {children}
            </LinearGradient>
        );
    }
}

export class OpacityGradientView extends Component<({ children: ReactNode, style?: any })> {
    render(): ReactNode {
        const gradientColors = ['rgba(255, 255, 255, 0.01)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.01)'];
        const gradientLocations = [0, 0.2, 0.5, 0.8, 1]; // Adjust these values for finer control
        const { children, style } = this.props;

        return (
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={gradientColors}
                locations={gradientLocations}
                style={[style]}
            >
                {children}
            </LinearGradient>
        );
    }
};