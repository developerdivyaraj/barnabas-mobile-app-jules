import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../controllers/journal_controller.dart';

class JournalView extends GetView<JournalController> {
  const JournalView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('My Journal')),
      body: Obx(() => ListView.builder(
            padding: const EdgeInsets.all(8.0),
            itemCount: controller.entries.length,
            itemBuilder: (context, index) {
              final entry = controller.entries[index];
              return Card(
                child: ListTile(
                  title: Text(entry['date']!, style: const TextStyle(fontWeight: FontWeight.bold)),
                  subtitle: Text(entry['preview']!),
                  trailing: Chip(label: Text(entry['mood']!)),
                  onTap: () {},
                ),
              );
            },
          )),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.edit),
      ),
    );
  }
}
