import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Animated from 'animated/lib/targets/react-dom';

const styles = {
  root: {
    background: '#2196f3',
    padding: '0 50px',
  },
  slide: {
    padding: '24px 16px',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  img: {
    width: 280,
    height: 280,
    display: 'block',
    marginBottom: 16,
  },
};

const albums = [
  {
    name: 'Iphone x',
    src: 'https://imageio.forbes.com/specials-images/imageserve/5e4db9d7d378190007f3dcc0/Apple-iPhone-11/960x0.jpg?format=jpg&width=960',
  },
  {
    name: 'Iphone 8',
    src: 'https://images.macrumors.com/t/1UMFGIID_f7iTTnlxMhDxS6UxYE=/800x0/smart/article-new/2017/09/iphone_8_roundup_header.jpg?lossy',
  },
  {
    name: 'Iphone 13 mini',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0apirXBkTe6UMzxkFrQeqYy0iD2O-vkrXzw&usqp=CAU',
  },
 
];

class Client extends React.Component {
  state = {
    index: 0,
    position: new Animated.Value(0),
  };

  handleChangeIndex = index => {
    this.setState({ index });
  };

  handleSwitch = (index, type) => {
    if (type === 'end') {
      Animated.spring(this.state.position, { toValue: index }).start();
      return;
    }
    this.state.position.setValue(index);
  };

  render() {
    const { index, position } = this.state;

    return (
      <SwipeableViews
        index={index}
        style={styles.root}
        onChangeIndex={this.handleChangeIndex}
        onSwitching={this.handleSwitch}
      >
        {albums.map((album, currentIndex) => {
          const inputRange = albums.map((_, i) => i);
          const scale = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.7;
            }),
          });
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return currentIndex === i ? 1 : 0.3;
            }),
          });
          const translateX = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => {
              return (100 / 2) * (i - currentIndex);
            }),
          });

          return (
            <Animated.div
              key={String(currentIndex)}
              style={Object.assign(
                {
                  opacity,
                  transform: [{ scale }, { translateX }],
                },
                styles.slide,
              )}
            >
              <img style={styles.img} src={album.src} alt="cover" />
              {album.name} 
            </Animated.div>
          );
        })}
      </SwipeableViews>
    );
  }
}

export default Client;
