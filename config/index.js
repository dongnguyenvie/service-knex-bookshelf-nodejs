const ckey = require('ckey') // auto-load env object

const sqlCredentials = {
    host    : ckey.DB_HOST,
    user    : ckey.DB_USER,
    pass    : ckey.DB_PASSWORD,
    name    : ckey.DB_NAME
}

const ggCredentials = {
    installed: {
        client_id     : ckey.GG_CLIENT_ID,
        project_id    : ckey.GG_PROJECT_ID,
        auth_uri      : ckey.GG_AUTH_URI,
        token_uri     : ckey.GG_TOKEN_URI,
        auth_provider_x509_cert_url: ckey.GG_AUTH_PROVIDER,
        client_secret : ckey.GG_CLIENT_SECRET,
        redirect_uris : eval(ckey.GG_REDIRECT_URIS)
    },
    scope: eval(ckey.GG_SCOPE)
  }
module.exports = {
    sqlCredentials,
    ggCredentials
}