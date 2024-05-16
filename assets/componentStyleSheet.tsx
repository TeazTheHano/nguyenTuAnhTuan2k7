import { StyleSheet, View } from 'react-native';
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
    fillBlur: 'rgba(0, 0, 0, 0.2)',
});

export default colorStyle;

export const componentStyle = StyleSheet.create<any>({
    // input 
    textInput: {
        borderRadius: vw(4),
        flex: 1,
        paddingVertical: vw(4),
        fontSize: vw(4),
    },

    outerGlow: {
        textShadowColor: 'rgba(255, 255, 255, 0.7)',
        textShadowOffset: { width: -vw(0.25), height: -vw(1) },
        textShadowRadius: vw(2),
        elevation: vw(2),
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