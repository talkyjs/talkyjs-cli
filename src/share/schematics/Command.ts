import {Command} from '@oclif/command'

import {
  main
} from "@angular-devkit/schematics-cli/bin/schematics"

export type SchematicsCommand = "setup" | "handler" | 'init' | 'service' | 'router'
export abstract class CommandWithSchematics extends Command  {
  private readonly collectionName = '@talkyjs/schematics'
  public async executeSchematics(command: SchematicsCommand, {
      options,
      dryRun,
      debug,
  }: {
      options?: string[];
      debug?: boolean;
      dryRun?: boolean;
  }) {
    const args = [
      [
        this.collectionName,
        command,
      ].join(":"),
      dryRun === true ? "--dry-run=true": '',
    ]
    if (options) args.push(...options)
    if (debug) this.log("npx @angular-devkit/schematics-cli ", ...args)
    await main({
      args
    })
  }  
}