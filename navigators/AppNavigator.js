
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation'
import HomePage from '../pages/HomePage'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Page5 from '../pages/Page5'
import React from 'react'
import {Button,Image} from 'react-native'

export const AppTabNavigator = createBottomTabNavigator({
    HomePage:{
        screen : HomePage,
        navigationOptions: ()=> TabOptions('首页','icon_tabbar_homepage','icon_tabbar_homepage','标题'),


    },
    Page4:{
        screen : Page4,
        navigationOptions: ()=> TabOptions('商店','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','更多'),

    },
    Page5:{
        screen : Page5,
        navigationOptions: ()=> TabOptions('我的','icon_tabbar_mine','icon_tabbar_mine_selected','更多'),

    }
},{
    tabBarPosition:'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部。（属性值：'top'，'bottom')
    swipeEnabled:false, // 是否允许在标签之间进行滑动。
    animationEnabled: false, // 是否在更改标签时显示动画。
    lazy:true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
    initialRouteName:'', // 设置默认的页面组件
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'orange', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'gray', // label和icon的前景色 不活跃状态下(未选中)。

        activeBackgroundColor:'#eeeeee', //label和icon的背景色 活跃状态下（选中） 。
        inactiveBackgroundColor:'#eeeeee', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }

});
const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        var imageStr = !focused ? normalImage : selectedImage;

        return(
            <Image
                source={{uri: imageStr}}
                style={[{height:26,width:26 }, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:22,color:'white',alignSelf:'center'};
    // header的style
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const tabBarVisible = true;
    // const header = null;
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle,tabBarVisible};
};

export const AppNavigator = createStackNavigator({
    tabNav : {
        screen : AppTabNavigator,
        navigationOptions : {
            title : 'tabbar'
        }
    },


    Page1 : {
        screen : Page1,
        navigationOptions : {
            title : 'Page1'
        }
    },
    Page2 : {
        screen : Page2,
        //2单个页面配置导航栏
        navigationOptions : ({navigation}) => ({
            title : `${navigation.state.params.name}页面名`
        })
    },
    Page3 : {
        screen : Page3,
        //动态配置导航栏
        navigationOptions : (props) => {
            const {navigation} = props;
            const {state,setParams} = navigation;
            const {params} = state;
            return {
                 title : params.name ? params.name : '',
                 headerRight : (
                    <Button title='编辑'
                            onPress={()=>{}}
                    />
                ),

            }
        }
    }
},{
    //1全局配置导航栏
    // navigationOptions : {
    //     header : null
    // }
});