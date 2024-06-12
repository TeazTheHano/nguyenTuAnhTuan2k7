// system import
import React, { Component, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, ScrollView, useColorScheme, TouchableOpacity, ImageBackground, Image, Animated, } from 'react-native';

// style import
import styles from './stylesheet';
import { vw, vh, vmax, vmin } from './stylesheet';

// component import
import { marginBottomForScrollView } from './component';

// svg import
import { searchIcon } from './svgXml';

// ____________________END OF IMPORT_______________________

// FONT SECTION
export class Nunito12Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Med extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Medium', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito10Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(2.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Reg extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Regular', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito12Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito14Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(3.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito16Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito18Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(4.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito20Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito22Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Nunito24Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Nunito-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika20Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika22Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(5.5) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika24Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(6) }, style]}>
                {children}
            </Text>
        );
    }
}

export class Signika28Bold extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'Signika-Bold', fontSize: vw(7) }, style]}>
                {children}
            </Text>
        );
    }
}

export class SonsieOne100 extends Component<{ children: React.ReactNode, style?: any }> {
    render() {
        const { children, style } = this.props;

        return (
            <Text style={[{ fontFamily: 'SonsieOne-Regular', fontSize: vw(25), color: '#85C5C9' }, style]}>
                {children}
            </Text>
        );
    }
}