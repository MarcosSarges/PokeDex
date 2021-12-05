const ScreenOptionsConfig = (initialRouterName: string) => {
  return {
    initialRouteName: initialRouterName,
    screenOptions: { header: () => undefined },
  };
};

export default ScreenOptionsConfig;
