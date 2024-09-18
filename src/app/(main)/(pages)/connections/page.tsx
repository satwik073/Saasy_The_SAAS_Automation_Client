import { CONNECTIONS } from '@/Constants'
import React from 'react'
import ConnectionCard from '@/Components/CardConnections/Connectioncard'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Connections = (props: Props) => {
  const {
    webhook_id,
    webhook_name,
    webhook_url,
    guild_id,
    guild_name,
    channel_id,
    access_token,
    workspace_name,
    workspace_icon,
    workspace_id,
    database_id,
    app_id,
    authed_user_id,
    authed_user_token,
    slack_access_token,
    bot_user_id,
    team_id,
    team_name,
  } = props.searchParams ?? {
    webhook_id: '',
    webhook_name: '',
    webhook_url: '',
    guild_id: '',
    guild_name: '',
    channel_id: '',
    access_token: '',
    workspace_name: '',
    workspace_icon: '',
    workspace_id: '',
    database_id: '',
    app_id: '',
    authed_user_id: '',
    authed_user_token: '',
    slack_access_token: '',
    bot_user_id: '',
    team_id: '',
    team_name: '',
  }

  return (
    <div className="flex flex-col gap-4 h-full overflow-y-auto">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b dark:bg-black bg-white p-6 text-4xl">
        Connections
      </h1>
      <section className="flex flex-col gap-4 p-6 text-muted-foreground">
        Connect all your apps directly from here. You may need to connect
        these apps regularly to refresh verification
        {CONNECTIONS.map((connection) => (
          <ConnectionCard
            key={connection.title}
            description={connection.description}
            title={connection.title}
            icon={connection.image}
            type={connection.title}
            connected={connection}
          />
        ))}
      </section>
    </div>
  )
}

export default Connections
