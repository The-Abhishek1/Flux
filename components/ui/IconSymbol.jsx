import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'magnifyingglass': 'search',
  'square.and.arrow.up': 'file-upload',
  'person.fill': 'person',
  'message': 'chat-bubble-outline',
  'bell': 'notifications-none',
  'brain': 'psychology',
  'play.circle': 'play-circle-outline',
  'ellipsis.vertical': 'more-vert',
  'chevron.left': 'arrow-back',
  'shield': 'security',
};

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({ name, size = 24, color, style, weight }) {
  return <MaterialIcons color={color} size={size} name={MAPPING[name]} style={style} />;
}