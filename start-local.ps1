$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$portableNode = Join-Path (Split-Path $PSScriptRoot -Parent) '.tools\node-v22.16.0-win-x64'
if (Test-Path (Join-Path $portableNode 'node.exe')) {
    $env:PATH = "$portableNode;$env:PATH"
}
if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    throw 'Node.js is required. Install Node.js, then run this script again.'
}
if (-not (Test-Path 'node_modules\vite\bin\vite.js')) {
    npm.cmd ci
    if ($LASTEXITCODE -ne 0) { throw 'Dependency installation failed.' }
}
npm.cmd run dev -- --host 127.0.0.1 --port 5173 --strictPort
