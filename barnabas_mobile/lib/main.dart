import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'core/theme.dart';
import 'routes/app_pages.dart';
import 'routes/app_routes.dart';

void main() {
  runApp(const BarnabasApp());
}

class BarnabasApp extends StatelessWidget {
  const BarnabasApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Barnabas',
      theme: AppTheme.lightTheme,
      initialRoute: Routes.login,
      getPages: AppPages.pages,
      debugShowCheckedModeBanner: false,
    );
  }
}
