import { execa } from "execa";

export const lsEsModules = async () => {
  const { stdout } = await execa("pnpm", ["ls", "-r", "--parseable"], {});

  return stdout as string[];
};
