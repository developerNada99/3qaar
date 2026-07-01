import { defineField, defineType } from "sanity";

export default defineType({
  name: "property",
  title: "العروض العقارية",
  type: "document",

  fields: [
    defineField({
      name: "category",
      title: "القسم",
      type: "string",
      options: {
        list: [
          { title: "أراضي", value: "landone" },
          { title: "عمائر", value: "amaar" },
          { title: "شقق تمليك", value: "apartment" },
          { title: "مزارع", value: "farm" },
          { title: "أراضي خام", value: "landtwo" },
          { title: "فرص استثمارية", value: "investment" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "العنوان",
      type: "string",
    }),

    defineField({
      name: "number",
      title: "رقم القطعة",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "الموقع",
      type: "string",
    }),

    defineField({
      name: "plan",
      title: "المخطط",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "السعر",
      type: "string",
    }),

    defineField({
      name: "priceNote",
      title: "ملاحظة السعر",
      type: "string",
    }),

    defineField({
      name: "status",
      title: "الحالة",
      type: "string",
      options: {
        list: [
          { title: "للبيع", value: "للبيع" },
          { title: "للإيجار", value: "للإيجار" },
          { title: "فرصة استثمارية", value: "فرصة استثمارية" },
        ],
      },
    }),

    defineField({
      name: "description",
      title: "الوصف",
      type: "text",
      rows: 4,
    }),

    // ══ الميديا — array يدعم صور وفيديوهات متعددة ══
    defineField({
      name: "media",
      title: "الصور والفيديوهات",
      description: "أضف صورة أو فيديو أو أكثر — لو في عنصر واحد سيظهر كبيراً",
      type: "array",
      of: [
        {
          type: "object",
          name: "mediaItem",
          title: "عنصر ميديا",
          fields: [
            {
              name: "type",
              title: "النوع",
              type: "string",
              options: {
                list: [
                  { title: "صورة", value: "image" },
                  { title: "فيديو", value: "video" },
                ],
                layout: "radio",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "image",
              title: "الصورة",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== "image",
            },
            {
              name: "video",
              title: "الفيديو",
              type: "file",
              options: { accept: "video/*" },
              hidden: ({ parent }: { parent: { type: string } }) => parent?.type !== "video",
           },
          ],
          preview: {
  select: {
    type: "type",
    image: "image",
  },
  prepare(selection) {
    const { type, image } = selection;

    return {
      title: type === "image" ? "🖼 صورة" : "🎬 فيديو",
      media: image,
    };
  },
},
        },
      ],
    }),

    defineField({
      name: "twitterLink",
      title: "رابط X",
      type: "url",
    }),

    defineField({
      name: "whatsappLink",
      title: "رابط واتساب",
      type: "url",
      initialValue: "https://wa.me/966559002060",
    }),

    defineField({
      name: "details",
      title: "التفاصيل",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "العنوان", type: "string" },
            { name: "value", title: "القيمة", type: "string" },
          ],
        },
      ],
    }),

    defineField({
      name: "order",
      title: "ترتيب العرض",
      type: "number",
      initialValue: 1,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});