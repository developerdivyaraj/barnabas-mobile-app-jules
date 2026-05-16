import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/groups_controller.dart';

class GroupsView extends GetView<GroupsController> {
  const GroupsView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Community Groups'),
        actions: [
          IconButton(icon: const Icon(Icons.search), onPressed: () {}),
        ],
      ),
      body: Obx(() => ListView.builder(
            itemCount: controller.groups.length,
            itemBuilder: (context, index) {
              final group = controller.groups[index];
              return ListTile(
                leading: CircleAvatar(child: Text(group['name']![0])),
                title: Text(group['name']!, style: const TextStyle(fontWeight: FontWeight.bold)),
                subtitle: Text(group['description']!),
                trailing: Text(group['members']!, style: const TextStyle(color: Colors.grey, fontSize: 12)),
                onTap: () {},
              );
            },
          )),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}
