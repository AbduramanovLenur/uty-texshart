export const Statuses = {
  DRAFT: 'DRAFT', // Черновик/Qoralama
  SUBMITTED: 'SUBMITTED', // Заявка подана/Ariza topshirildi
  PAYMENT_DONE: 'PAYMENT_DONE', // Оплата произведена/To‘lov qilindi
  ACCEPTED: 'ACCEPTED', // Заявка принята/Ariza qabul qilindi
  FORWARDED: 'FORWARDED', // Направлена/Yo‘naltirildi
  ACT_CREATED: 'ACT_CREATED', // Акт составлен/Dalolatnoma tuzildi
  ACT_CONFIRMED: 'ACT_CONFIRMED', // Акт подтвержден/Dalolatnoma tasdiqlandi
  TECHNICAL_CONDITIONS_ISSUED: 'TECHNICAL_CONDITIONS_ISSUED', // Технические условия выданы/Texnik-shart berildi
  PROJECT_DOCUMENTS_UPLOADED: 'PROJECT_DOCUMENTS_UPLOADED', // Проектная документация загружена/Loyiha xujjatlari yuklandi
  CONSTRUCTION_PERMIT_ISSUED: 'CONSTRUCTION_PERMIT_ISSUED', // Разрешение на строительство выдано/Qurilishga ruxsat berildi
  CONSTRUCTION_STARTED: 'CONSTRUCTION_STARTED', // Строительство начато/Qurilish boshlandi
  CONSTRUCTION_COMPLETED: 'CONSTRUCTION_COMPLETED', // Строительство завершено/Qurilish yakunlandi
  CONSTRUCTION_ACT_UPLOADED: 'CONSTRUCTION_ACT_UPLOADED', // Акт по строительству загружен/Qurilish dalolatnoma yuklandi
  COMPLETED: 'COMPLETED', // Заявка завершена/Ariza yakunlandi
  REJECTED: 'REJECTED', // Отклонена/Rad etildi
} as const;
