import { detectAgent } from "@skarab/detect-package-manager"

export const detectPackageManager = async (path: string): Promise<string | undefined> => {
  const packageManager = await detectAgent(path)

  return packageManager?.name
}
