const requestsRepo = {
  getRequestsTable: async (page) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(page);
    return {
      columns: [
        {
          accessorKey: "id",
          header: "ID",
          isVisible: true,
        },
        {
          accessorKey: "code",
          header: "الكود",
          isVisible: true,
        },
        {
          accessorKey: "validity",
          header: "الصلاحية",
          isVisible: true,
        },
        {
          accessorKey: "status",
          header: "الحالة",
          isVisible: true,
        },
        {
          accessorKey: "userNumber",
          header: "المستخدم",
          isVisible: true,
        },
        {
          accessorKey: "endDate",
          header: "تاريخ الإنتهاء",
          isVisible: true,
        },
      ],
      data: [
        {
          id: "0",
          code: "qwerty",
          validity: 30,
          status: "مستخدم",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
        {
          id: "1",
          code: "qwerty",
          validity: 30,
          status: "منتهي",
          userNumber: null,
          endDate: "17-10-2025",
        },
        {
          id: "2",
          code: "qwerty",
          validity: 30,
          status: "متاح",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
        {
          id: "3",
          code: "qwerty",
          validity: 30,
          status: "مستخدم",
          userNumber: "0951830877",
          endDate: "17-10-2025",
        },
      ],
    };
  },
  getUnitOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "الوحدة الأولى" }];
  },
  getFloorOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "الطابق الأولى" }];
  },
  getSuiteOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "الجناح الأولى" }];
  },
  getRoomOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "الغرفة الأولى" }];
  },
  getTypeOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "النوع الأولى" }];
  },
  getImportanceOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "الأهمية الأولى" }];
  },
  getWorkerOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "العاملة الأولى" }];
  },
  getSupervisorOptions: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [{ id: 1, name: "المشرفة الأولى" }];
  },
  postAcceptRequest: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { message: `the request ${id} is Accepted` };
  },
  postRejectRequest: async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return { message: `the request ${id} is Accepted` };
  },
};
export default requestsRepo;
