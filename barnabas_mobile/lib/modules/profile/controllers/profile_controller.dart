import 'package:get/get.dart';

class ProfileController extends GetxController {
  final name = 'John Doe'.obs;
  final email = 'john.doe@example.com'.obs;

  void logout() {
    Get.offAllNamed('/login');
  }
}
