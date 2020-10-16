// semver regex
const semver = /(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?)/;

// detect dependency name
const name = /(bump|update) (?<name>(?:@[^\s]+\/)?[^\s]+) (requirement)?/i;

// detect dependency type from PR title
const dev = /\((deps-dev)\):/;

// detect security flag
const security = /(^|: )\[security\]/i;

// config values
const config = /(?<type>security|semver):(?<target>.+)/i;

// version with extra stuff
const nameWithVersion = new RegExp(/(?<prefix>-[a-z0-9.\-]+)?/.source + semver.source + /(?<suffix>-[a-z0-9.\-]+)?/.source)

export default {
  name,
  dev,
  security,
  config,
  nameWithVersion,
};
