import { EmulatorServer } from 'firebase-tools/lib/emulator/EmulatorServer';
import { HostingEmulator } from 'firebase-tools/lib/emulator/HostingEmulator';
import { FirestoreEmulator } from 'firebase-tools/lib/emulator/FirestoreEmulator';
import requireConfig from 'firebase-tools/lib/requireConfig';
import requirePermissions from 'firebase-tools/lib/requirePermissions';
import checkDupHostingKeys from 'firebase-tools/lib/checkDupHostingKeys';
import getProjectNumber from 'firebase-tools/lib/getProjectNumber';
import RC from 'firebase-tools/lib/rc';
import Config from 'firebase-tools/lib/config';

async function refineOptions(options: object): Promise<object> {
  const withConfig = {
    ...options,
    config: Config.load({}),
    rc: RC.load(),
    project: 'nekostore-dev-923b4',
  };
  await requireConfig(withConfig);
  await requirePermissions(withConfig);
  await checkDupHostingKeys(withConfig);
  await getProjectNumber(withConfig);

  return {
    ...withConfig,
  };
}

export default async function runEmulators(): Promise<void> {
  const emulatorServers = [
    new FirestoreEmulator({
      port: 12348,
    }),
    new HostingEmulator(
      await refineOptions({
        port: 5000,
        options: {
          config: Config.load({}),
          project: 'nekostore-dev-923b4',
        },
      }),
    ),
  ].map(emulator => new EmulatorServer(emulator));

  await Promise.all(
    emulatorServers.map(async server => {
      await server.start();
      after(async () => {
        await server.stop();
      });
    }),
  );
}
