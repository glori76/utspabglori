import { Heading, Image, Text, FlatList } from "native-base";
import { Box, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components";
import datas from "../datas2";
import { Button } from 'react-native';



const Home = () => {
  const navigation = useNavigation();

  const renderitem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("News Detail", { item: item })}
      >
        <Box
          p={"2"}
          borderBottomColor={"dark.500"}
          borderBottomWidth={1}
          flexDirection="row"
          flex={1}
        >
          <Box flex={1} mr={"4"}>
            <Image
              source={{ uri: item.image }}
              w="full"
              h="full"
              alt="Image Data"
            />
          </Box>
          <Box flex={1.8}>
            <Text fontSize={"sm"}>{item.date}</Text>
            <Heading lineHeight={"md"} fontSize={"md"}>
              {item.title}
            </Heading>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  const navigateToAddProduct = () => {
    navigation.navigate("Add Product"); // Gantilah dengan nama yang sesuai untuk halaman "Tambah Produk".
  };

  return (
    <>
      <Header title={"Daftar Produk"} />
      <Box py={""} bg="red.300">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {/* ... your existing code ... */}
        </ScrollView>
      </Box>
      
      <FlatList
        data={datas}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Button
  onPress={navigateToAddProduct}
  title="Tambah Produk"
  color="brown"
  style={{ position: "absolute", bottom: 4, right: 4 }}
/> 
    </>
  );
};


export default Home;