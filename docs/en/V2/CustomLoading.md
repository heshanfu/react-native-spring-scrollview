# Customize loading

Understand the refreshing status before customizing refreshing:

* "waiting": The content view is not out of the bottom yet.
* "dragging": The content view is out of the bottom but not too more to load.
* "draggingEnough": It is enough to load,but the finger has not touched up, and will load more data at once if touching up.
* "draggingCancel": Drag back after the `draggingEnough` status.
* "loading": Loading data.
* "rebound": The loading has been completed and it is rebounding.
* "allLoaded": Whether the data is all loaded.

### Customize

#### Import
```$js
import { LoadingFooter } from "react-native-spring-scrollview/LoadingFooter";
```

#### Extends `LoadingFooter`
```$js
class MyFooter extends LoadingFooter{}
```

#### Overwrite `render`
```$js
render() {
  return <Text>{this.state.status}</Text>
}
```

LoadingFooter has these props and states extended from its parent. You can use it directly.
* this.props.maxHeight: The type is `number`， it is the height for the loading footer.
* this.props.offset: The type is `Animated.Value`, Animated value for contentOffset.y of the SpringScrollView
* this.state.status: The type is `FooterStatus`, it is the status of the loading footer.
```$js
export type FooterStatus =
  | "waiting"
  | "dragging"
  | "draggingEnough"
  | "draggingCancel"
  | "releaseRebound"
  | "loading"
  | "rebound"
  | "allLoaded";
```

#### Customize the height of the loading footer
Overwrite the static var `height` to change the height of the loading footer.
```$js
class MyFooter extends LoadingFooter{
    static height:number = 50;
}
```

#### Slect the loading style

Overwrite the static var `style` to change the style of the loading footer.
```
class MyFooter extends LoadingFooter{
    static style:string = "stickyContent";
}
```

SpringScrollView supports 3 kinds of style for loading footer,default is `stickyContent` ：

style  |  preview
---- | ------
"bottoming" | ![bottoming](../../res/LoadingBottoming.gif)
"stickyScrollView" | ![stickyScrollView](../../res/LoadingStickyScrollView.gif)
"stickyContent" | ![stickyContent](../../res/LoadingStickyContent.gif)

#### Apply your customize loading footer to SpringScrollView
```$js
<SpringScrollView loadingFooter={MyFooter}/>
```

Fully example is here [NormalFooter](https://github.com/bolan9999/react-native-spring-scrollview/blob/master/src/LoadingFooter.js)

#### Native interpolate animation

this.props.offset: Native driver animated value for contentOffset.y of the SpringScrollView, you can use it to make a native animation.

Example:

```$js
<Animated.Image
    source={require("./Customize/res/arrow.png")}
    style={{
    transform: [{
        rotate: offset.interpolate({
            inputRange: [
                bottomOffset - 1 + 45,
                bottomOffset + 45,
                bottomOffset + maxHeight,
                bottomOffset + maxHeight + 1
            ],
            outputRange: ["180deg", "180deg", "0deg", "0deg"]
        })
    }]
}}/>
```

Fully example is here [NormalFooter](https://github.com/bolan9999/react-native-spring-scrollview/blob/master/src/NormalFooter.js)

### Contribute your awesome loading footer

Fork [react-native-spring-scrollview](https://github.com/bolan9999/react-native-spring-scrollview), make awesome loading footer in the [Customize](https://github.com/bolan9999/react-native-spring-scrollview/tree/master/src/Customize) dir, and pull a request to me.
