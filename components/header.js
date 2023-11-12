import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Box, HStack, Heading } from "native-base";
import { TouchableOpacity } from
 
"react-native";
import Ionicons from
 
"@expo/vector-icons/Ionicons";
import { useNavigation } from
 
"@react-navigation/native";

import { ImageBackground } from "react-native";

const Header = ({ title, withBack = false }) => {
  const whiteColor = "black";
  const navigation = useNavigation();

  return (
    <ImageBackground source={require("../assets/background.jpeg")} style={{ flex: 1 }}>
      <SafeAreaView>
        <StatusBar barStyle="light" backgroundColor={whiteColor} />
        <Box bg={"whiteColor"} p={"4"}>
          <HStack justifyContent="space-between" alignItems="center">
            {withBack && (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Ionicons
                  name="arrow-back-outline"
                  size={30}
                  color="black"
                  style={{
                    marginHorizontal: 10,
                  }}
                />
              </TouchableOpacity>
            )}
            <Heading color={"black"}>{title}</Heading>
          </HStack>
        </Box>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Header;