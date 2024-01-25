import 'package:get/get.dart';

import '../controllers/conversation_list_controller.dart';

class ConversationListBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<ConversationListController>(
      () => ConversationListController(),
    );
  }
}
