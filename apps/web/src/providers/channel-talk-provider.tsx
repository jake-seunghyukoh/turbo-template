import Script from 'next/script';

export function ChannelTalkProvider() {
  const pluginScript = process.env.NEXT_PUBLIC_CHANNELTALK_SCRIPT;

  if (!pluginScript) {
    return null;
  }

  return (
    <Script
      id="channelTalk"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: pluginScript,
      }}
    />
  );
}
