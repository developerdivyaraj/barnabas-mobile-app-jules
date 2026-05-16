import 'package:get/get.dart';

class GroupsController extends GetxController {
  final groups = [
    {'name': 'Morning Prayer Warriors', 'members': '124 members', 'description': 'Daily morning prayer and reflections.'},
    {'name': 'Theologians Circle', 'members': '45 members', 'description': 'Deep dives into scripture and doctrine.'},
    {'name': 'Young Adults Fellowship', 'members': '89 members', 'description': 'Connecting young adults for fellowship.'},
  ].obs;
}
