import dayjs from "dayjs";
import { Image, Text, View } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const BorrowingItem = ({
  img_url,
  name,
  authors,
  onPress,
  max_borrow_days,
  borrow_date,
  status,
}) => {
  max_borrow_days = parseInt(max_borrow_days);
  const borrow_days = Math.abs(dayjs().diff(borrow_date, "days"));
  const isBorrowing = !status;

  return (
    <View
      borderRadius="12px"
      backgroundColor="#FFDCD5"
      p="8px"
      flexDirection="row"
      gap="12px"
      overflow={"hidden"}
      alignItems={"center"}
      mb="10px"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
    >
      <View
        flex={1}
        w="105px"
        h="156px"
        overflow={"hidden"}
        justifyItems={"center"}
        justifyContent={"center"}
        borderRadius="12px"
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            w="105px"
            h="100%"
            resizeMode="contain"
            source={{ uri: img_url }}
            alt="book cover"
            borderRadius={12}
          />
        </TouchableOpacity>
      </View>
      <View flexDirection="column" flex={2}>
        <Text fontSize={18} fontWeight={700} color="#053B47">
          {name}
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Author:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {authors[0].name}
          </Text>
        </Text>

        <Text fontSize={12} fontWeight={400} color="#053B47">
          Borrow date:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {dayjs(borrow_date).format("DD/MM/YYYY")}
          </Text>
        </Text>

        {!isBorrowing ? (
          <View
            ml="auto"
            py="8px"
            px="16px"
            bg="#F0E68E"
            borderRadius={90}
            mt="4px"
          >
            <Text fontSize={14} fontWeight={700} color="#053B47">
              Borrow
            </Text>
          </View>
        ) : borrow_days > max_borrow_days ? (
          <>
            <Text fontSize={12} fontWeight={400} color="#053B47">
              Borrow days:{" "}
              <Text fontSize={12} fontWeight={700} color="#053B47">
                {borrow_days} days
              </Text>
            </Text>
            <View
              ml="auto"
              py="8px"
              px="16px"
              bg="#FF7171"
              borderRadius={90}
              mt="4px"
            >
              <Text fontSize={14} fontWeight={700} color="#053B47">
                Late {borrow_days - max_borrow_days} days
              </Text>
            </View>
          </>
        ) : (
          <>
            <Text fontSize={12} fontWeight={400} color="#053B47">
              Borrow days:{" "}
              <Text fontSize={12} fontWeight={700} color="#053B47">
                {borrow_days} days
              </Text>
            </Text>
            <View
              ml="auto"
              py="8px"
              px="16px"
              bg="#F0E68E"
              borderRadius={90}
              mt="4px"
            >
              <Text fontSize={14} fontWeight={700} color="#053B47">
                Expire in {max_borrow_days - borrow_days} days
              </Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};
const ReturnItem = ({
  img_url,
  name,
  authors,
  onPress,
  max_borrow_days,
  borrow_date,
  return_date,
  borrow_days,
}) => {
  return (
    <View
      borderRadius="12px"
      backgroundColor="#FFDCD5"
      p="8px"
      flexDirection="row"
      gap="12px"
      overflow={"hidden"}
      alignItems={"center"}
      mb="10px"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
    >
      <View
        flex={1}
        w="105px"
        h="156px"
        overflow={"hidden"}
        justifyItems={"center"}
        justifyContent={"center"}
        borderRadius="12px"
      >
        <TouchableOpacity onPress={onPress}>
          <Image
            w="105px"
            h="100%"
            resizeMode="contain"
            source={{ uri: img_url }}
            alt="book cover"
            borderRadius={12}
          />
        </TouchableOpacity>
      </View>
      <View flexDirection="column" flex={2}>
        <Text fontSize={18} fontWeight={700} color="#053B47">
          {name}
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Author:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {authors[0].name}
          </Text>
        </Text>

        <Text fontSize={12} fontWeight={400} color="#053B47">
          Borrow date:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {dayjs(borrow_date).format("DD/MM/YYYY")}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Return date:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {dayjs(return_date).format("DD/MM/YYYY")}
          </Text>
        </Text>
        <Text fontSize={12} fontWeight={400} color="#053B47">
          Total borrow days:{" "}
          <Text fontSize={12} fontWeight={700} color="#053B47">
            {borrow_days} days
          </Text>
        </Text>
        {borrow_days > max_borrow_days ? (
          <View
            ml="auto"
            py="8px"
            px="16px"
            bg="#FF7171"
            borderRadius={90}
            mt="4px"
          >
            <Text fontSize={14} fontWeight={700} color="#053B47">
              Return late {borrow_days - max_borrow_days} days
            </Text>
          </View>
        ) : (
          <View
            ml="auto"
            py="8px"
            px="16px"
            bg="#afffee"
            borderRadius={90}
            mt="4px"
          >
            <Text fontSize={14} fontWeight={700} color="#053B47">
              Return
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
const PayFineItem = ({ fine_pay, pay_date }) => {
  return (
    <View
      borderRadius="12px"
      backgroundColor="#FFDCD5"
      p="8px"
      flexDirection="column"
      gap="4px"
      overflow={"hidden"}
      alignItems={"center"}
      mb="10px"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
    >
      <Text fontSize={12} fontWeight={400} color="#053B47" mr="auto">
        Pay date:{" "}
        <Text fontSize={12} fontWeight={700} color="#053B47">
          {dayjs(pay_date).format("DD/MM/YYYY")}
        </Text>
      </Text>
      <Text fontSize={12} fontWeight={400} color="#053B47" mr="auto">
        Fine pay:{" "}
        <Text fontSize={12} fontWeight={700} color="#053B47">
          {fine_pay}
        </Text>
      </Text>
      <View
        ml="auto"
        py="8px"
        px="16px"
        bg="#A2FFC2"
        borderRadius={90}
        mt="4px"
      >
        <Text fontSize={14} fontWeight={700} color="#053B47">
          Pay fine
        </Text>
      </View>
    </View>
  );
};
export { BorrowingItem, ReturnItem, PayFineItem };
