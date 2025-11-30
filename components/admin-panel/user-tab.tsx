import { Suspense } from "react";
import UserTabClient from "./user-tab-client";
import { listUsers } from "@/oop/infrastructure/user-repository";

async function UserTab() {
  const users = await listUsers(10, 1);
  return (
    <Suspense>
      <UserTabClient users={users} />
    </Suspense>
  );
}

export default UserTab;
