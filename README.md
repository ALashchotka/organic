# Organic Test Project

## Installation

To install all dependencies:

```sh
yarn install
```

## Running the Project

### iOS

To launch project on iOS:

```sh
yarn ios
```

_If script fails - launch from Xcode manually._

### Android

To launch project on Android (must be on `android` branch):

```sh
yarn android
```

## Known Issues

1. **Hero Animation Bug**

   - Image animation breaks when closing product page
   - _Platform: iOS_

2. **Missing Native Plugin**

   - Product editing functionality not implemented
   - _Platform: Cross-platform_

3. **Database Clearing**

   - Use `_CLEAR_DB_ON_EVERY_LAUNCH_` flag to reset database
   - _Platform: Cross-platform_

4. **Android Specific Problems**
   - Hero animations don't work
   - Migrated from @realm/react to pure realm
   - _Platform: Android only_
