import 'package:get/get.dart';

class AuthController extends GetxController {
  final isLoading = false.obs;

  void login(String email, String password) async {
    isLoading.value = true;
    try {
      // TODO: Implement HTTP call to backend /api/v1/auth/login
      await Future.delayed(const Duration(seconds: 2)); // Simulate network request
      Get.snackbar('Success', 'Logged in successfully');
      Get.offAllNamed('/dashboard');
    } catch (e) {
      Get.snackbar('Error', 'Failed to login: $e');
    } finally {
      isLoading.value = false;
    }
  }

  void register(String email, String password, String name) async {
    isLoading.value = true;
    try {
      // TODO: Implement HTTP call to backend /api/v1/auth/register
      await Future.delayed(const Duration(seconds: 2)); // Simulate network request
      Get.snackbar('Success', 'Registered successfully');
      Get.offAllNamed('/onboarding');
    } catch (e) {
      Get.snackbar('Error', 'Failed to register: $e');
    } finally {
      isLoading.value = false;
    }
  }
}
