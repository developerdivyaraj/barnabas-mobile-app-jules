import 'package:get/get.dart';
import '../../home/controllers/home_controller.dart';
import '../../journal/controllers/journal_controller.dart';
import '../../ai_chat/controllers/ai_chat_controller.dart';
import '../../groups/controllers/groups_controller.dart';
import '../../profile/controllers/profile_controller.dart';
import '../controllers/dashboard_controller.dart';

class DashboardBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<DashboardController>(() => DashboardController());
    Get.lazyPut<HomeController>(() => HomeController());
    Get.lazyPut<JournalController>(() => JournalController());
    Get.lazyPut<AiChatController>(() => AiChatController());
    Get.lazyPut<GroupsController>(() => GroupsController());
    Get.lazyPut<ProfileController>(() => ProfileController());
  }
}
