import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  faAddressCard,
  faArrowRight,
  faBars,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faAddressCard} size={20} />
        <Text style={styles.username}>Hữu Trọng</Text>
        <FontAwesomeIcon icon={faBars} size={20} />
      </View>

      <Image
        style={styles.avatar}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Text style={styles.nickname}>@ng_htrong_ne</Text>

      <View style={styles.details}>
        <View style={styles.partDetail}>
          <Text style={{ fontWeight: "bold" }}>1</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.partDetail}>
          <Text style={{ fontWeight: "bold" }}>5.6M</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.partDetail}>
          <Text style={{ fontWeight: "bold" }}>152.6M</Text>
          <Text>Likes</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.labelButton}>Sửa hồ sơ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.labelButton}>Thêm bạn</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bio}>
        <Text>Your Profile</Text>
        <View style={styles.partAccount}>
          <Text>Full Name</Text>
          <Text>
            Nguyễn Hữu Trọng
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
        <View style={styles.partAccount}>
          <Text>Date of birth</Text>
          <Text>
            15/10/2003
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
        <View style={styles.partAccount}>
          <Text>Email</Text>
          <Text>
            trongnh2003@gmail.com
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>

        <Text style={{ marginTop: 20 }}>Social Account</Text>
        <View style={styles.partAccount}>
          <Text>Instagram</Text>
          <Text>
            trongnh2003
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
        <View style={styles.partAccount}>
          <Text>Facebook</Text>
          <Text>
            Hữu Trọng
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
        <View style={styles.partAccount}>
          <Text>YouTube</Text>
          <Text>
            Trọng Nguyễn
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
        <View style={styles.partAccount}>
          <Text>Twitter</Text>
          <Text>
            Thêm Twitter
            <FontAwesomeIcon icon={faChevronRight} style={styles.arrowRight} />
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    marginTop: 55,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  username: {
    fontWeight: "bold",
  },
  avatar: {
    marginTop: 25,
    width: 80,
    height: 80,
    borderRadius: 999,
  },
  nickname: {
    marginTop: 15,
    fontWeight: 500,
  },
  details: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "70%",
  },
  partDetail: {
    alignItems: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
  },
  button: {
    backgroundColor: "#f1f1f2",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 26,
    paddingRight: 26,

    borderRadius: 8,
    marginRight: 5,
  },
  labelButton: {
    textDecorationLine: "underline",
    fontSize: 13,
    fontWeight: 500,
  },
  bio: {
    marginTop: 15,
    width: "80%",
  },
  partAccount: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  arrowRight: {
    marginLeft: 5,
  },
});
