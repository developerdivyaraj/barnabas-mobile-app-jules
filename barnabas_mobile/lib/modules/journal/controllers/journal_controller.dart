import 'package:get/get.dart';

class JournalController extends GetxController {
  final entries = [
    {'date': 'Oct 24, 2023', 'preview': 'Reflecting on today\'s reading about grace...', 'mood': 'Peaceful'},
    {'date': 'Oct 23, 2023', 'preview': 'Struggled a bit with patience today at work.', 'mood': 'Challenged'},
  ].obs;
}
