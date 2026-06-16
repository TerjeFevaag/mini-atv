# Copy all product and homepage images into public/images/
# Run from mini-atv folder: pwsh scripts/copy-images.ps1

$root = Split-Path -Parent $PSScriptRoot
$publicImages = Join-Path $PSScriptRoot "..\public\images"

# ── Homepage images ──────────────────────────────────────────
$homepageSrc = Join-Path $root "Engros Service_files"
$homepageDst = Join-Path $publicImages "homepage"
New-Item -ItemType Directory -Force -Path $homepageDst | Out-Null

if (Test-Path $homepageSrc) {
    Get-ChildItem $homepageSrc -File | ForEach-Object {
        Copy-Item $_.FullName -Destination (Join-Path $homepageDst $_.Name) -Force
    }
    Write-Host "✓ Homepage images copied"
} else {
    Write-Warning "Homepage images folder not found: $homepageSrc"
}

# ── Product images ────────────────────────────────────────────
$productMap = @{
    "250 CC ATV VANNAVKJØLT 250CC FIREHJULINGER MANCINI 250 ATV DELER orange black_files" = "mancini-atv-250-cc-mod-r"
    "AT Farmer125 CC blacl_files"                                                          = "atv-farmer125cc-sort-speedometer"
    "AT Farmer125 CC red_files"                                                            = "atv-farmer125cc-rod-speedometer-hengerfeste"
    "ATV Predator 125 CC black 2_files"                                                   = "atv-predator-sort-speedometer-hengerfeste"
    "Can-Am Renegade Firhjuling for barn 12v_files"                                       = "can-am-renegade-firhjuling-for-barn-12v"
    "Elektrisk mini ATV for barn 500W green_files"                                        = "elektrisk-mini-atv-for-barn-1000w-renegade-gronn"
    "Elektrisk mini ATV for barn 500W red_files"                                          = "elektrisk-mini-atv-for-barn-1000w-renegade-rod"
    "FARMER MINI ATV 49CC FOR BARN blue_files"                                            = "farmer-mini-atv-50cc-bla"
    "FARMER MINI ATV 49CC FOR BARN green_files"                                           = "farmer-mini-atv-50cc-gronn"
    "FARMER MINI ATV 49CC FOR BARN red_files"                                             = "farmer-mini-atv-50cc-rod"
    "Kjøp mini atv 49cc, 50CC black edition two salg online _ Engros Service_files"       = "mini-atv-50cc-black-edition-two"
    "MANCINI OUTBACK 110CC ATV FIREHJULING orange_files"                                  = "outback-110cc-atv-med-revers-oransje"
    "MANCINI OUTBACK 110CC ATV OG FIREHJULINGER white_files"                             = "outback-110cc-atv-hvit"
    "Mancini Pioner 110CC.Den ultimate barne ATV med stilig design black._files"          = "challenge-atv-110cc-black-edition"
    "Mancini Pioner 110CC.Den ultimate barne ATV med stilig design green._files"         = "challenge-atv-110cc-green-edition"
    "Mancini Pioner 110CC.Den ultimate barne ATV med stilig design orange._files"        = "mancini-pioner-atv-110cc-oransje"
    "MINI ATV 50CC GREEN EDITION TWO_files"                                               = "mini-atv-50cc-green-edition-two"
    "MINI ATV 50CC PINK EDITION TWO_files"                                                = "mini-atv-50cc-pink-edition-two"
    "mini atv firehjuling for barn 49cc_files"                                            = "mini-atv-firehjuling-for-barn-49cc-rod"
    "Renegade el Atv kardang børsteløs 1200W green_files"                                = "renegade-el-atv-kardang-borstelos-1200w-gronn"
    "Renegade el Atv kardang børsteløs 1200W red_files"                                  = "renegade-el-atv-kardang-borstelos-1200w-rod"
    "Tøff elektrisk barne ATV 6v_files"                                                   = "toff-elektrisk-barne-atv-6v"
    "YOKI 450CC BEAST LANG UTGAVE black_files"                                            = "yoki-450cc-beast-lang-utgave"
}

$productsFolder = Join-Path $root "Products"
foreach ($srcFolder in $productMap.Keys) {
    $slug = $productMap[$srcFolder]
    $src = Join-Path $productsFolder $srcFolder
    $dst = Join-Path $publicImages "products\$slug"
    New-Item -ItemType Directory -Force -Path $dst | Out-Null
    if (Test-Path $src) {
        Get-ChildItem $src -File | ForEach-Object {
            Copy-Item $_.FullName -Destination (Join-Path $dst $_.Name) -Force
        }
        Write-Host "✓ $slug"
    } else {
        Write-Warning "Not found: $src"
    }
}

Write-Host "`n✅ Done! Images copied to public/images/"
