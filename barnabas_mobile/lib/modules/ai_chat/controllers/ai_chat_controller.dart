import 'package:get/get.dart';

class AiChatController extends GetxController {
  final messages = [
    {'sender': 'barnabas', 'text': 'Hello! I am Barnabas, your AI companion. How can I help you reflect today?'},
  ].obs;

  void sendMessage(String text) {
    if (text.trim().isEmpty) return;
    messages.add({'sender': 'user', 'text': text});

    // Simulate AI response
    Future.delayed(const Duration(seconds: 1), () {
      messages.add({'sender': 'barnabas', 'text': 'That is an insightful thought. Let\'s explore that deeper...'});
    });
  }
}
