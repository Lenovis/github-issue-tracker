import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { theme } from '../assets/theme';

const defaultIconSize = 20;

export const DotCircleIcon = ({
  size = defaultIconSize,
  color = theme.colors.buttonGreen,
}) => <FontAwesome name="dot-circle-o" size={size} color={color} />;

export const CheckCircleIcon = ({
  size = defaultIconSize,
  color = theme.colors.purple,
}) => <Ionicons name="checkmark-circle-outline" size={size} color={color} />;

export const PullRequestIcon = ({
  size = defaultIconSize,
  color = theme.colors.buttonGreen,
}) => <Ionicons name="git-pull-request-outline" size={size} color={color} />;

export const MergedRequestIcon = ({
  size = defaultIconSize,
  color = theme.colors.purple,
}) => <Ionicons name="git-merge-outline" size={size} color={color} />;

export const NavigateBackIcon = ({
  size = defaultIconSize,
  color = theme.colors.white,
}) => <MaterialIcons name="navigate-before" size={size} color={color} />;

export const NavigateNextIcon = ({
  size = defaultIconSize,
  color = theme.colors.white,
}) => <MaterialIcons name="navigate-next" size={size} color={color} />;
