﻿export class LocalStarStorage {

    constructor(localStorage) {
        /// <summary>Encapsulates the browser's localStorage API to make saving a list of starred sessions easy.</summary>
        this.localStorage = localStorage;
        this.load();
    }

    addStar(sessionId) {
        /// <summary>Stars the given session.</summary>
        if (this.isStarred(sessionId)) return;

        this.sessions.push(sessionId);
        this.save();
    }

    removeStar(sessionId) {
        /// <summary>Removes the star from the given session.</summary>
        const index = this.sessions.indexOf(sessionId);
        if (index >= 0) {
            this.sessions.splice(index, 1);
            this.save();
        }
    }

    isStarred(sessionId) {
        /// <summary>Returns true if the given session is starred.</summary>
        return this.sessions.indexOf(sessionId) >= 0;
    }

    load() {
        /// <summary>Loads the starred sessions from storage.</summary>
        const json = this.localStorage.getItem("stars");
        if (json) {
            try {
                this.sessions = JSON.parse(json) || [];
            } catch (exception) {
                this.sessions = [];
            }
        } else {
            this.sessions = [];
        }
    }

    save() {
        /// <summary>Saves the starred sessions to storage.</summary>
        this.localStorage.setItem("stars", JSON.stringify(this.sessions));
    }
}
// SIG // Begin signature block
// SIG // MIIaVgYJKoZIhvcNAQcCoIIaRzCCGkMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFOJZweXi4VDF
// SIG // ASdUTT0b8agNHthtoIIVJjCCBJkwggOBoAMCAQICEzMA
// SIG // AACdHo0nrrjz2DgAAQAAAJ0wDQYJKoZIhvcNAQEFBQAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EwHhcNMTIwOTA0
// SIG // MjE0MjA5WhcNMTMwMzA0MjE0MjA5WjCBgzELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjENMAsGA1UECxMETU9QUjEeMBwGA1UE
// SIG // AxMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMIIBIjANBgkq
// SIG // hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuqRJbBD7Ipxl
// SIG // ohaYO8thYvp0Ka2NBhnScVgZil5XDWlibjagTv0ieeAd
// SIG // xxphjvr8oxElFsjAWCwxioiuMh6I238+dFf3haQ2U8pB
// SIG // 72m4aZ5tVutu5LImTXPRZHG0H9ZhhIgAIe9oWINbSY+0
// SIG // 39M11svZMJ9T/HprmoQrtyFndNT2eLZhh5iUfCrPZ+kZ
// SIG // vtm6Y+08Tj59Auvzf6/PD7eBfvT76PeRSLuPPYzIB5Mc
// SIG // 87115PxjICmfOfNBVDgeVGRAtISqN67zAIziDfqhsg8i
// SIG // taeprtYXuTDwAiMgEPprWQ/grZ+eYIGTA0wNm2IZs7uW
// SIG // vJFapniGdptszUzsErU4RwIDAQABo4IBDTCCAQkwEwYD
// SIG // VR0lBAwwCgYIKwYBBQUHAwMwHQYDVR0OBBYEFN5R3Bvy
// SIG // HkoFPxIcwbzDs2UskQWYMB8GA1UdIwQYMBaAFMsR6MrS
// SIG // tBZYAck3LjMWFrlMmgofMFYGA1UdHwRPME0wS6BJoEeG
// SIG // RWh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL01pY0NvZFNpZ1BDQV8wOC0zMS0yMDEw
// SIG // LmNybDBaBggrBgEFBQcBAQROMEwwSgYIKwYBBQUHMAKG
// SIG // Pmh0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2Vy
// SIG // dHMvTWljQ29kU2lnUENBXzA4LTMxLTIwMTAuY3J0MA0G
// SIG // CSqGSIb3DQEBBQUAA4IBAQAqpPfuwMMmeoNiGnicW8X9
// SIG // 7BXEp3gT0RdTKAsMAEI/OA+J3GQZhDV/SLnP63qJoc1P
// SIG // qeC77UcQ/hfah4kQ0UwVoPAR/9qWz2TPgf0zp8N4k+R8
// SIG // 1W2HcdYcYeLMTmS3cz/5eyc09lI/R0PADoFwU8GWAaJL
// SIG // u78qA3d7bvvQRooXKDGlBeMWirjxSmkVXTP533+UPEdF
// SIG // Ha7Ki8f3iB7q/pEMn08HCe0mkm6zlBkB+F+B567aiY9/
// SIG // Wl6EX7W+fEblR6/+WCuRf4fcRh9RlczDYqG1x1/ryWlc
// SIG // cZGpjVYgLDpOk/2bBo+tivhofju6eUKTOUn10F7scI1C
// SIG // dcWCVZAbtVVhMIIEujCCA6KgAwIBAgIKYQKOQgAAAAAA
// SIG // HzANBgkqhkiG9w0BAQUFADB3MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0EwHhcNMTIwMTA5MjIyNTU4WhcNMTMwNDA5MjIy
// SIG // NTU4WjCBszELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjENMAsGA1UE
// SIG // CxMETU9QUjEnMCUGA1UECxMebkNpcGhlciBEU0UgRVNO
// SIG // OkY1MjgtMzc3Ny04QTc2MSUwIwYDVQQDExxNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjANBgkqhkiG
// SIG // 9w0BAQEFAAOCAQ8AMIIBCgKCAQEAluyOR01UwlyVgNdO
// SIG // Cz2/l0PDS+NgZxEvAU0M2NFGLxBA3gukUFISiAtDei0/
// SIG // 7khuZseR5gPKbux5qWojm81ins1qpD/no0P/YkehtLpE
// SIG // +t9AwYVUfuigpyxDI5tSHzI19P6aVp+NY3d7MJ4KM4Vy
// SIG // G8pKyMwlzdtdES7HsIzxj0NIRwW1eiAL5fPvwbr0s9jN
// SIG // OI/7Iao9Cm2FF9DK54YDwDODtSXEzFqcxMPaYiVNUyUU
// SIG // YY/7G+Ds90fGgEXmNVMjNnfKsN2YKznAdTUP3YFMIT12
// SIG // MMWysGVzKUgn2MLSsIRHu3i61XQD3tdLGfdT3njahvdh
// SIG // iCYztEfGoFSIFSssdQIDAQABo4IBCTCCAQUwHQYDVR0O
// SIG // BBYEFC/oRsho025PsiDQ3olO8UfuSMHyMB8GA1UdIwQY
// SIG // MBaAFCM0+NlSRnAK7UD7dvuzK7DDNbMPMFQGA1UdHwRN
// SIG // MEswSaBHoEWGQ2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29mdFRpbWVT
// SIG // dGFtcFBDQS5jcmwwWAYIKwYBBQUHAQEETDBKMEgGCCsG
// SIG // AQUFBzAChjxodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpL2NlcnRzL01pY3Jvc29mdFRpbWVTdGFtcFBDQS5j
// SIG // cnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcN
// SIG // AQEFBQADggEBAHP/fS6dzY2IK3x9414VceloYvAItkNW
// SIG // xFxKLWjY+UgRkfMRnIXsEtRUoHWpOKFZf3XuxvU02FSk
// SIG // 4tDMfJerk3UwlwcdBFMsNn9/8UAeDJuA4hIKIDoxwAd1
// SIG // Z+D6NJzsiPtXHOVYYiCQRS9dRanIjrN8cm0QJ8VL2G+i
// SIG // qBKzbTUjZ/os2yUtuV2xHgXnQyg+nAV2d/El3gVHGW3e
// SIG // SYWh2kpLCEYhNah1Nky3swiq37cr2b4qav3fNRfMPwzH
// SIG // 3QbPTpQkYyALLiSuX0NEEnpc3TfbpEWzkToSV33jR8Zm
// SIG // 08+cRlb0TAex4Ayq1fbVPKLgtdT4HH4EVRBrGPSRzVGn
// SIG // lWUwggW8MIIDpKADAgECAgphMyYaAAAAAAAxMA0GCSqG
// SIG // SIb3DQEBBQUAMF8xEzARBgoJkiaJk/IsZAEZFgNjb20x
// SIG // GTAXBgoJkiaJk/IsZAEZFgltaWNyb3NvZnQxLTArBgNV
// SIG // BAMTJE1pY3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1
// SIG // dGhvcml0eTAeFw0xMDA4MzEyMjE5MzJaFw0yMDA4MzEy
// SIG // MjI5MzJaMHkxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpX
// SIG // YXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYD
// SIG // VQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xIzAhBgNV
// SIG // BAMTGk1pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENBMIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsnJZ
// SIG // XBkwZL8dmmAgIEKZdlNsPhvWb8zL8epr/pcWEODfOnSD
// SIG // GrcvoDLs/97CQk4j1XIA2zVXConKriBJ9PBorE1LjaW9
// SIG // eUtxm0cH2v0l3511iM+qc0R/14Hb873yNqTJXEXcr609
// SIG // 4CholxqnpXJzVvEXlOT9NZRyoNZ2Xx53RYOFOBbQc1sF
// SIG // umdSjaWyaS/aGQv+knQp4nYvVN0UMFn40o1i/cvJX0Yx
// SIG // ULknE+RAMM9yKRAoIsc3Tj2gMj2QzaE4BoVcTlaCKCoF
// SIG // MrdL109j59ItYvFFPeesCAD2RqGe0VuMJlPoeqpK8kbP
// SIG // Nzw4nrR3XKUXno3LEY9WPMGsCV8D0wIDAQABo4IBXjCC
// SIG // AVowDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUyxHo
// SIG // ytK0FlgByTcuMxYWuUyaCh8wCwYDVR0PBAQDAgGGMBIG
// SIG // CSsGAQQBgjcVAQQFAgMBAAEwIwYJKwYBBAGCNxUCBBYE
// SIG // FP3RMU7TJoqV4ZhgO6gxb6Y8vNgtMBkGCSsGAQQBgjcU
// SIG // AgQMHgoAUwB1AGIAQwBBMB8GA1UdIwQYMBaAFA6sgmBA
// SIG // VieX5SUT/CrhClOVWeSkMFAGA1UdHwRJMEcwRaBDoEGG
// SIG // P2h0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3Js
// SIG // L3Byb2R1Y3RzL21pY3Jvc29mdHJvb3RjZXJ0LmNybDBU
// SIG // BggrBgEFBQcBAQRIMEYwRAYIKwYBBQUHMAKGOGh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // cm9zb2Z0Um9vdENlcnQuY3J0MA0GCSqGSIb3DQEBBQUA
// SIG // A4ICAQBZOT5/Jkav629AsTK1ausOL26oSffrX3XtTDst
// SIG // 10OtC/7L6S0xoyPMfFCYgCFdrD0vTLqiqFac43C7uLT4
// SIG // ebVJcvc+6kF/yuEMF2nLpZwgLfoLUMRWzS3jStK8cOeo
// SIG // DaIDpVbguIpLV/KVQpzx8+/u44YfNDy4VprwUyOFKqSC
// SIG // HJPilAcd8uJO+IyhyugTpZFOyBvSj3KVKnFtmxr4HPBT
// SIG // 1mfMIv9cHc2ijL0nsnljVkSiUc356aNYVt2bAkVEL1/0
// SIG // 2q7UgjJu/KSVE+Traeepoiy+yCsQDmWOmdv1ovoSJgll
// SIG // OJTxeh9Ku9HhVujQeJYYXMk1Fl/dkx1Jji2+rTREHO4Q
// SIG // FRoAXd01WyHOmMcJ7oUOjE9tDhNOPXwpSJxy0fNsysHs
// SIG // cKNXkld9lI2gG0gDWvfPo2cKdKU27S0vF8jmcjcS9G+x
// SIG // PGeC+VKyjTMWZR4Oit0Q3mT0b85G1NMX6XnEBLTT+yzf
// SIG // H4qerAr7EydAreT54al/RrsHYEdlYEBOsELsTu2zdnnY
// SIG // CjQJbRyAMR/iDlTd5aH75UcQrWSY/1AWLny/BSF64pVB
// SIG // J2nDk4+VyY3YmyGuDVyc8KKuhmiDDGotu3ZrAB2WrfIW
// SIG // e/YWgyS5iM9qqEcxL5rc43E91wB+YkfRzojJuBj6DnKN
// SIG // waM9rwJAav9pm5biEKgQtDdQCNbDPTCCBgcwggPvoAMC
// SIG // AQICCmEWaDQAAAAAABwwDQYJKoZIhvcNAQEFBQAwXzET
// SIG // MBEGCgmSJomT8ixkARkWA2NvbTEZMBcGCgmSJomT8ixk
// SIG // ARkWCW1pY3Jvc29mdDEtMCsGA1UEAxMkTWljcm9zb2Z0
// SIG // IFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9yaXR5MB4XDTA3
// SIG // MDQwMzEyNTMwOVoXDTIxMDQwMzEzMDMwOVowdzELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBMIIBIjANBgkqhkiG9w0BAQEF
// SIG // AAOCAQ8AMIIBCgKCAQEAn6Fssd/bSJIqfGsuGeG94uPF
// SIG // mVEjUK3O3RhOJA/u0afRTK10MCAR6wfVVJUVSZQbQpKu
// SIG // mFwwJtoAa+h7veyJBw/3DgSY8InMH8szJIed8vRnHCz8
// SIG // e+eIHernTqOhwSNTyo36Rc8J0F6v0LBCBKL5pmyTZ9co
// SIG // 3EZTsIbQ5ShGLieshk9VUgzkAyz7apCQMG6H81kwnfp+
// SIG // 1pez6CGXfvjSE/MIt1NtUrRFkJ9IAEpHZhEnKWaol+TT
// SIG // BoFKovmEpxFHFAmCn4TtVXj+AZodUAiFABAwRu233iNG
// SIG // u8QtVJ+vHnhBMXfMm987g5OhYQK1HQ2x/PebsgHOIktU
// SIG // //kFw8IgCwIDAQABo4IBqzCCAacwDwYDVR0TAQH/BAUw
// SIG // AwEB/zAdBgNVHQ4EFgQUIzT42VJGcArtQPt2+7MrsMM1
// SIG // sw8wCwYDVR0PBAQDAgGGMBAGCSsGAQQBgjcVAQQDAgEA
// SIG // MIGYBgNVHSMEgZAwgY2AFA6sgmBAVieX5SUT/CrhClOV
// SIG // WeSkoWOkYTBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHmCEHmtFqFKoKWtTHNY9AcTLmUwUAYDVR0fBEkw
// SIG // RzBFoEOgQYY/aHR0cDovL2NybC5taWNyb3NvZnQuY29t
// SIG // L3BraS9jcmwvcHJvZHVjdHMvbWljcm9zb2Z0cm9vdGNl
// SIG // cnQuY3JsMFQGCCsGAQUFBwEBBEgwRjBEBggrBgEFBQcw
// SIG // AoY4aHR0cDovL3d3dy5taWNyb3NvZnQuY29tL3BraS9j
// SIG // ZXJ0cy9NaWNyb3NvZnRSb290Q2VydC5jcnQwEwYDVR0l
// SIG // BAwwCgYIKwYBBQUHAwgwDQYJKoZIhvcNAQEFBQADggIB
// SIG // ABCXisNcA0Q23em0rXfbznlRTQGxLnRxW20ME6vOvnuP
// SIG // uC7UEqKMbWK4VwLLTiATUJndekDiV7uvWJoc4R0Bhqy7
// SIG // ePKL0Ow7Ae7ivo8KBciNSOLwUxXdT6uS5OeNatWAweaU
// SIG // 8gYvhQPpkSokInD79vzkeJkuDfcH4nC8GE6djmsKcpW4
// SIG // oTmcZy3FUQ7qYlw/FpiLID/iBxoy+cwxSnYxPStyC8jq
// SIG // cD3/hQoT38IKYY7w17gX606Lf8U1K16jv+u8fQtCe9RT
// SIG // ciHuMMq7eGVcWwEXChQO0toUmPU8uWZYsy0v5/mFhsxR
// SIG // VuidcJRsrDlM1PZ5v6oYemIp76KbKTQGdxpiyT0ebR+C
// SIG // 8AvHLLvPQ7Pl+ex9teOkqHQ1uE7FcSMSJnYLPFKMcVpG
// SIG // QxS8s7OwTWfIn0L/gHkhgJ4VMGboQhJeGsieIiHQQ+kr
// SIG // 6bv0SMws1NgygEwmKkgkX1rqVu+m3pmdyjpvvYEndAYR
// SIG // 7nYhv5uCwSdUtrFqPYmhdmG0bqETpr+qR/ASb/2KMmyy
// SIG // /t9RyIwjyWa9nR2HEmQCPS2vWY+45CHltbDKY7R4VAXU
// SIG // QS5QrJSwpXirs6CWdRrZkocTdSIvMqgIbqBbjCW/oO+E
// SIG // yiHW6x5PyZruSeD3AWVviQt9yGnI5m7qp5fOMSn/DsVb
// SIG // XNhNG6HY+i+ePy5VFmvJE6P9MYIEnDCCBJgCAQEwgZAw
// SIG // eTELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEjMCEGA1UEAxMaTWlj
// SIG // cm9zb2Z0IENvZGUgU2lnbmluZyBQQ0ECEzMAAACdHo0n
// SIG // rrjz2DgAAQAAAJ0wCQYFKw4DAhoFAKCBvjAZBgkqhkiG
// SIG // 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
// SIG // MQ4wDAYKKwYBBAGCNwIBFTAjBgkqhkiG9w0BCQQxFgQU
// SIG // GgNqRx//yzLk1Y66Xl2fClzn3vkwXgYKKwYBBAGCNwIB
// SIG // DDFQME6gJoAkAE0AaQBjAHIAbwBzAG8AZgB0ACAATABl
// SIG // AGEAcgBuAGkAbgBnoSSAImh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9sZWFybmluZyAwDQYJKoZIhvcNAQEBBQAE
// SIG // ggEAplPFzHMMM7quuf01Actd7w9gVKDrUHzlnGum1xuu
// SIG // Wr4+P+nHrerolKMN5LmbgTsmIQ7xrWOgq5j06G1TsJLh
// SIG // 0NzdWVU6QvvlNeNUg3kHIbL27rIZuOZi0DdmtjqeKh7W
// SIG // /Zxe76TKF+M7iHlcJHZSKSytHvyNDvYtgQ/ncA4wtqcF
// SIG // NUpxQ/jA4ID6URmaMfpEji9lPNhrbAILxom8RVSCh1jN
// SIG // lNXcCHKl/BX055KITrBjLw5ncfyEzWwhex/SlkmIqZkG
// SIG // 4F+hV9XupGu0OtS2XeOkK+ULvp4I0U0snVDGx3GfK0Nm
// SIG // KCUwdhy5Awf9Uz4hs5HOdjBjhrQxTK2UIYYwqKGCAh8w
// SIG // ggIbBgkqhkiG9w0BCQYxggIMMIICCAIBATCBhTB3MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQDExhNaWNyb3Nv
// SIG // ZnQgVGltZS1TdGFtcCBQQ0ECCmECjkIAAAAAAB8wCQYF
// SIG // Kw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0B
// SIG // BwEwHAYJKoZIhvcNAQkFMQ8XDTEyMTExNTAwMDgwMFow
// SIG // IwYJKoZIhvcNAQkEMRYEFNS7cgqijzCTAvzTIViLddWr
// SIG // 4nxTMA0GCSqGSIb3DQEBBQUABIIBABzQbn7K7kM99sGS
// SIG // 1Eo54e6MPt/MAalXEDdwf6zo1HiB1zLK9FPpCUR4PGyz
// SIG // lFP9zPNz1iZQ9VkjA0Pqpi6YOINV3MDW4oRV+wrLSfCH
// SIG // cULs9cyyo1xCyjlLaVuvbDu7fedHp9XXEOul/uooml02
// SIG // /Ez5r0N037Ng3Blro4rAQ1jsHms1EQ+7qfFWDm+Ap547
// SIG // 0w3nY8JGL9DG/JJlZBx8zafxOW5iREVGtCldJ77yAEia
// SIG // k1q3rbSdx7UplN2kl+e/ejM90tZIzaI6KqaD6nDlU7bl
// SIG // UiT6ULBjAVfFi8LcqfLLMCTpGUsMfroZYHuwx1I93frc
// SIG // ivYlZ/Sgbh5dXX2G5aI=
// SIG // End signature block

// SIG // Begin signature block
// SIG // MIIdjAYJKoZIhvcNAQcCoIIdfTCCHXkCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFFaqnmeLyE/H
// SIG // j8dzmQTf2Tx83z2DoIIYajCCBNowggPCoAMCAQICEzMA
// SIG // AAESUd3i98tFHyUAAAAAARIwDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE4MDgyMzIw
// SIG // MjA0NloXDTE5MTEyMzIwMjA0NlowgcoxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xJTAjBgNVBAsTHE1pY3Jvc29mdCBBbWVy
// SIG // aWNhIE9wZXJhdGlvbnMxJjAkBgNVBAsTHVRoYWxlcyBU
// SIG // U1MgRVNOOjdBQjUtMkRGMi1EQTNGMSUwIwYDVQQDExxN
// SIG // aWNyb3NvZnQgVGltZS1TdGFtcCBTZXJ2aWNlMIIBIjAN
// SIG // BgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsSoRS5OM
// SIG // lfwE1cWYa34LBtZ3EjH1+15kc8V83MKNFKxh7shhB9Kg
// SIG // 8zgS4VfhISCo27KRuQ7Lfp3dDukoCgP0diulKcv+mi5e
// SIG // 4SGYdhw16C0tSEpk/DUsVId6y/1LU+QREo+8sPbImAjp
// SIG // 2ccTqQjN5lQhXKCgTaLSqkcrp3nsKjUv4Y1T4UAu2jks
// SIG // uiElyzg3NZiYj/MKqBIpYu4UUxUrwjgCZ672Hbd+W6UH
// SIG // RRAl108S1QOKpH4Pz657QVzmPRhVldPw7yVWqIOciRWS
// SIG // /bAai/hov+tjTN+PJQK2iR4vdiJeg1a6lPA5Z+TpdSDs
// SIG // 4aJIRrStttVyc2hke9s5uJKGYwIDAQABo4IBCTCCAQUw
// SIG // HQYDVR0OBBYEFCWFR6ig8e6VcKVhkO1tZ0dDANNLMB8G
// SIG // A1UdIwQYMBaAFCM0+NlSRnAK7UD7dvuzK7DDNbMPMFQG
// SIG // A1UdHwRNMEswSaBHoEWGQ2h0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29m
// SIG // dFRpbWVTdGFtcFBDQS5jcmwwWAYIKwYBBQUHAQEETDBK
// SIG // MEgGCCsGAQUFBzAChjxodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFRpbWVTdGFt
// SIG // cFBDQS5jcnQwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDQYJ
// SIG // KoZIhvcNAQEFBQADggEBAJxxls3tnNQZd4NhzoMCwC53
// SIG // RURxjqk3KcqJRO4qmVChPm2Nh4Guo0JueuQYRxyxejfV
// SIG // jQwBYnkgfBVazTwKbSae2xEC7IFDfRHeQVsjHZ88ehW/
// SIG // APhEZeyly8x6u7lC3Qma3iDfjk/qup0r0/fSaUiaDE2w
// SIG // ANgs6NHach4dtKC+ESxNyls3M5p8Z9uEdCV8Nw7aAIyu
// SIG // i0PEJAdeAdu7j0nHTvGCZ1BCCtbqw0Bel4cDc0jMe6Xk
// SIG // B/yYYgMahU/Jj7APIW7TYyxUEJYsphxqkixJU3clR2qA
// SIG // AvVCZpJ/NMVqK1wlr0beslGPSIoXqwb3wd39ylDtsgyA
// SIG // RkZOLAbjhEgwggX/MIID56ADAgECAhMzAAABA14lHJkf
// SIG // ox64AAAAAAEDMA0GCSqGSIb3DQEBCwUAMH4xCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xKDAmBgNVBAMTH01pY3Jvc29mdCBD
// SIG // b2RlIFNpZ25pbmcgUENBIDIwMTEwHhcNMTgwNzEyMjAw
// SIG // ODQ4WhcNMTkwNzI2MjAwODQ4WjB0MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMR4wHAYDVQQDExVNaWNyb3NvZnQgQ29ycG9y
// SIG // YXRpb24wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
// SIG // AoIBAQDRlHY25oarNv5p+UZ8i4hQy5Bwf7BVqSQdfjnn
// SIG // BZ8PrHuXss5zCvvUmyRcFrU53Rt+M2wR/Dsm85iqXVNr
// SIG // qsPsE7jS789Xf8xly69NLjKxVitONAeJ/mkhvT5E+94S
// SIG // nYW/fHaGfXKxdpth5opkTEbOttU6jHeTd2chnLZaBl5H
// SIG // hvU80QnKDT3NsumhUHjRhIjiATwi/K+WCMxdmcDt66Va
// SIG // mJL1yEBOanOv3uN0etNfRpe84mcod5mswQ4xFo8ADwH+
// SIG // S15UD8rEZT8K46NG2/YsAzoZvmgFFpzmfzS/p4eNZTkm
// SIG // yWPU78XdvSX+/Sj0NIZ5rCrVXzCRO+QUauuxygQjAgMB
// SIG // AAGjggF+MIIBejAfBgNVHSUEGDAWBgorBgEEAYI3TAgB
// SIG // BggrBgEFBQcDAzAdBgNVHQ4EFgQUR77Ay+GmP/1l1jjy
// SIG // A123r3f3QP8wUAYDVR0RBEkwR6RFMEMxKTAnBgNVBAsT
// SIG // IE1pY3Jvc29mdCBPcGVyYXRpb25zIFB1ZXJ0byBSaWNv
// SIG // MRYwFAYDVQQFEw0yMzAwMTIrNDM3OTY1MB8GA1UdIwQY
// SIG // MBaAFEhuZOVQBdOCqhc3NyK1bajKdQKVMFQGA1UdHwRN
// SIG // MEswSaBHoEWGQ2h0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2lvcHMvY3JsL01pY0NvZFNpZ1BDQTIwMTFfMjAx
// SIG // MS0wNy0wOC5jcmwwYQYIKwYBBQUHAQEEVTBTMFEGCCsG
// SIG // AQUFBzAChkVodHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20v
// SIG // cGtpb3BzL2NlcnRzL01pY0NvZFNpZ1BDQTIwMTFfMjAx
// SIG // MS0wNy0wOC5jcnQwDAYDVR0TAQH/BAIwADANBgkqhkiG
// SIG // 9w0BAQsFAAOCAgEAn/XJUw0/DSbsokTYDdGfY5YGSz8e
// SIG // XMUzo6TDbK8fwAG662XsnjMQD6esW9S9kGEX5zHnwya0
// SIG // rPUn00iThoj+EjWRZCLRay07qCwVlCnSN5bmNf8MzsgG
// SIG // FhaeJLHiOfluDnjYDBu2KWAndjQkm925l3XLATutghIW
// SIG // IoCJFYS7mFAgsBcmhkmvzn1FFUM0ls+BXBgs1JPyZ6vi
// SIG // c8g9o838Mh5gHOmwGzD7LLsHLpaEk0UoVFzNlv2g24HY
// SIG // tjDKQ7HzSMCyRhxdXnYqWJ/U7vL0+khMtWGLsIxB6aq4
// SIG // nZD0/2pCD7k+6Q7slPyNgLt44yOneFuybR/5WcF9ttE5
// SIG // yXnggxxgCto9sNHtNr9FB+kbNm7lPTsFA6fUpyUSj+Z2
// SIG // oxOzRVpDMYLa2ISuubAfdfX2HX1RETcn6LU1hHH3V6qu
// SIG // +olxyZjSnlpkdr6Mw30VapHxFPTy2TUxuNty+rR1yIib
// SIG // ar+YRcdmstf/zpKQdeTr5obSyBvbJ8BblW9Jb1hdaSre
// SIG // U0v46Mp79mwV+QMZDxGFqk+av6pX3WDG9XEg9FGomsrp
// SIG // 0es0Rz11+iLsVT9qGTlrEOlaP470I3gwsvKmOMs1jaqY
// SIG // WSRAuDpnpAdfoP7YO0kT+wzh7Qttg1DO8H8+4NkI6Iwh
// SIG // SkHC3uuOW+4Dwx1ubuZUNWZncnwa6lL2IsRyP64wggYH
// SIG // MIID76ADAgECAgphFmg0AAAAAAAcMA0GCSqGSIb3DQEB
// SIG // BQUAMF8xEzARBgoJkiaJk/IsZAEZFgNjb20xGTAXBgoJ
// SIG // kiaJk/IsZAEZFgltaWNyb3NvZnQxLTArBgNVBAMTJE1p
// SIG // Y3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0
// SIG // eTAeFw0wNzA0MDMxMjUzMDlaFw0yMTA0MDMxMzAzMDla
// SIG // MHcxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xITAfBgNVBAMTGE1p
// SIG // Y3Jvc29mdCBUaW1lLVN0YW1wIFBDQTCCASIwDQYJKoZI
// SIG // hvcNAQEBBQADggEPADCCAQoCggEBAJ+hbLHf20iSKnxr
// SIG // LhnhveLjxZlRI1Ctzt0YTiQP7tGn0UytdDAgEesH1VSV
// SIG // FUmUG0KSrphcMCbaAGvoe73siQcP9w4EmPCJzB/LMySH
// SIG // nfL0Zxws/HvniB3q506jocEjU8qN+kXPCdBer9CwQgSi
// SIG // +aZsk2fXKNxGU7CG0OUoRi4nrIZPVVIM5AMs+2qQkDBu
// SIG // h/NZMJ36ftaXs+ghl3740hPzCLdTbVK0RZCfSABKR2YR
// SIG // JylmqJfk0waBSqL5hKcRRxQJgp+E7VV4/gGaHVAIhQAQ
// SIG // MEbtt94jRrvELVSfrx54QTF3zJvfO4OToWECtR0Nsfz3
// SIG // m7IBziJLVP/5BcPCIAsCAwEAAaOCAaswggGnMA8GA1Ud
// SIG // EwEB/wQFMAMBAf8wHQYDVR0OBBYEFCM0+NlSRnAK7UD7
// SIG // dvuzK7DDNbMPMAsGA1UdDwQEAwIBhjAQBgkrBgEEAYI3
// SIG // FQEEAwIBADCBmAYDVR0jBIGQMIGNgBQOrIJgQFYnl+Ul
// SIG // E/wq4QpTlVnkpKFjpGEwXzETMBEGCgmSJomT8ixkARkW
// SIG // A2NvbTEZMBcGCgmSJomT8ixkARkWCW1pY3Jvc29mdDEt
// SIG // MCsGA1UEAxMkTWljcm9zb2Z0IFJvb3QgQ2VydGlmaWNh
// SIG // dGUgQXV0aG9yaXR5ghB5rRahSqClrUxzWPQHEy5lMFAG
// SIG // A1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9jcmwubWljcm9z
// SIG // b2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3RzL21pY3Jvc29m
// SIG // dHJvb3RjZXJ0LmNybDBUBggrBgEFBQcBAQRIMEYwRAYI
// SIG // KwYBBQUHMAKGOGh0dHA6Ly93d3cubWljcm9zb2Z0LmNv
// SIG // bS9wa2kvY2VydHMvTWljcm9zb2Z0Um9vdENlcnQuY3J0
// SIG // MBMGA1UdJQQMMAoGCCsGAQUFBwMIMA0GCSqGSIb3DQEB
// SIG // BQUAA4ICAQAQl4rDXANENt3ptK132855UU0BsS50cVtt
// SIG // DBOrzr57j7gu1BKijG1iuFcCy04gE1CZ3XpA4le7r1ia
// SIG // HOEdAYasu3jyi9DsOwHu4r6PCgXIjUji8FMV3U+rkuTn
// SIG // jWrVgMHmlPIGL4UD6ZEqJCJw+/b85HiZLg33B+JwvBhO
// SIG // nY5rCnKVuKE5nGctxVEO6mJcPxaYiyA/4gcaMvnMMUp2
// SIG // MT0rcgvI6nA9/4UKE9/CCmGO8Ne4F+tOi3/FNSteo7/r
// SIG // vH0LQnvUU3Ih7jDKu3hlXFsBFwoUDtLaFJj1PLlmWLMt
// SIG // L+f5hYbMUVbonXCUbKw5TNT2eb+qGHpiKe+imyk0Bnca
// SIG // Ysk9Hm0fgvALxyy7z0Oz5fnsfbXjpKh0NbhOxXEjEiZ2
// SIG // CzxSjHFaRkMUvLOzsE1nyJ9C/4B5IYCeFTBm6EISXhrI
// SIG // niIh0EPpK+m79EjMLNTYMoBMJipIJF9a6lbvpt6Znco6
// SIG // b72BJ3QGEe52Ib+bgsEnVLaxaj2JoXZhtG6hE6a/qkfw
// SIG // Em/9ijJssv7fUciMI8lmvZ0dhxJkAj0tr1mPuOQh5bWw
// SIG // ymO0eFQF1EEuUKyUsKV4q7OglnUa2ZKHE3UiLzKoCG6g
// SIG // W4wlv6DvhMoh1useT8ma7kng9wFlb4kLfchpyOZu6qeX
// SIG // zjEp/w7FW1zYTRuh2Povnj8uVRZryROj/TCCB3owggVi
// SIG // oAMCAQICCmEOkNIAAAAAAAMwDQYJKoZIhvcNAQELBQAw
// SIG // gYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5n
// SIG // dG9uMRAwDgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVN
// SIG // aWNyb3NvZnQgQ29ycG9yYXRpb24xMjAwBgNVBAMTKU1p
// SIG // Y3Jvc29mdCBSb290IENlcnRpZmljYXRlIEF1dGhvcml0
// SIG // eSAyMDExMB4XDTExMDcwODIwNTkwOVoXDTI2MDcwODIx
// SIG // MDkwOVowfjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldh
// SIG // c2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNV
// SIG // BAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEoMCYGA1UE
// SIG // AxMfTWljcm9zb2Z0IENvZGUgU2lnbmluZyBQQ0EgMjAx
// SIG // MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIB
// SIG // AKvw+nIQHC6t2G6qghBNNLrytlghn0IbKmvpWlCquAY4
// SIG // GgRJun/DDB7dN2vGEtgL8DjCmQawyDnVARQxQtOJDXlk
// SIG // h36UYCRsr55JnOloXtLfm1OyCizDr9mpK656Ca/XllnK
// SIG // YBoF6WZ26DJSJhIv56sIUM+zRLdd2MQuA3WraPPLbfM6
// SIG // XKEW9Ea64DhkrG5kNXimoGMPLdNAk/jj3gcN1Vx5pUkp
// SIG // 5w2+oBN3vpQ97/vjK1oQH01WKKJ6cuASOrdJXtjt7UOR
// SIG // g9l7snuGG9k+sYxd6IlPhBryoS9Z5JA7La4zWMW3Pv4y
// SIG // 07MDPbGyr5I4ftKdgCz1TlaRITUlwzluZH9TupwPrRkj
// SIG // hMv0ugOGjfdf8NBSv4yUh7zAIXQlXxgotswnKDglmDlK
// SIG // Ns98sZKuHCOnqWbsYR9q4ShJnV+I4iVd0yFLPlLEtVc/
// SIG // JAPw0XpbL9Uj43BdD1FGd7P4AOG8rAKCX9vAFbO9G9RV
// SIG // S+c5oQ/pI0m8GLhEfEXkwcNyeuBy5yTfv0aZxe/CHFfb
// SIG // g43sTUkwp6uO3+xbn6/83bBm4sGXgXvt1u1L50kppxMo
// SIG // pqd9Z4DmimJ4X7IvhNdXnFy/dygo8e1twyiPLI9AN0/B
// SIG // 4YVEicQJTMXUpUMvdJX3bvh4IFgsE11glZo+TzOE2rCI
// SIG // F96eTvSWsLxGoGyY0uDWiIwLAgMBAAGjggHtMIIB6TAQ
// SIG // BgkrBgEEAYI3FQEEAwIBADAdBgNVHQ4EFgQUSG5k5VAF
// SIG // 04KqFzc3IrVtqMp1ApUwGQYJKwYBBAGCNxQCBAweCgBT
// SIG // AHUAYgBDAEEwCwYDVR0PBAQDAgGGMA8GA1UdEwEB/wQF
// SIG // MAMBAf8wHwYDVR0jBBgwFoAUci06AjGQQ7kUBU7h6qfH
// SIG // MdEjiTQwWgYDVR0fBFMwUTBPoE2gS4ZJaHR0cDovL2Ny
// SIG // bC5taWNyb3NvZnQuY29tL3BraS9jcmwvcHJvZHVjdHMv
// SIG // TWljUm9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNybDBe
// SIG // BggrBgEFBQcBAQRSMFAwTgYIKwYBBQUHMAKGQmh0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWlj
// SIG // Um9vQ2VyQXV0MjAxMV8yMDExXzAzXzIyLmNydDCBnwYD
// SIG // VR0gBIGXMIGUMIGRBgkrBgEEAYI3LgMwgYMwPwYIKwYB
// SIG // BQUHAgEWM2h0dHA6Ly93d3cubWljcm9zb2Z0LmNvbS9w
// SIG // a2lvcHMvZG9jcy9wcmltYXJ5Y3BzLmh0bTBABggrBgEF
// SIG // BQcCAjA0HjIgHQBMAGUAZwBhAGwAXwBwAG8AbABpAGMA
// SIG // eQBfAHMAdABhAHQAZQBtAGUAbgB0AC4gHTANBgkqhkiG
// SIG // 9w0BAQsFAAOCAgEAZ/KGpZjgVHkaLtPYdGcimwuWEeFj
// SIG // kplCln3SeQyQwWVfLiw++MNy0W2D/r4/6ArKO79HqaPz
// SIG // adtjvyI1pZddZYSQfYtGUFXYDJJ80hpLHPM8QotS0LD9
// SIG // a+M+By4pm+Y9G6XUtR13lDni6WTJRD14eiPzE32mkHSD
// SIG // jfTLJgJGKsKKELukqQUMm+1o+mgulaAqPyprWEljHwlp
// SIG // blqYluSD9MCP80Yr3vw70L01724lruWvJ+3Q3fMOr5ko
// SIG // l5hNDj0L8giJ1h/DMhji8MUtzluetEk5CsYKwsatruWy
// SIG // 2dsViFFFWDgycScaf7H0J/jeLDogaZiyWYlobm+nt3TD
// SIG // QAUGpgEqKD6CPxNNZgvAs0314Y9/HG8VfUWnduVAKmWj
// SIG // w11SYobDHWM2l4bf2vP48hahmifhzaWX0O5dY0HjWwec
// SIG // hz4GdwbRBrF1HxS+YWG18NzGGwS+30HHDiju3mUv7Jf2
// SIG // oVyW2ADWoUa9WfOXpQlLSBCZgB/QACnFsZulP0V3HjXG
// SIG // 0qKin3p6IvpIlR+r+0cjgPWe+L9rt0uX4ut1eBrs6jeZ
// SIG // eRhL/9azI2h15q/6/IvrC4DqaTuv/DDtBEyO3991bWOR
// SIG // PdGdVk5Pv4BXIqF4ETIheu9BCrE/+6jMpF3BoYibV3FW
// SIG // TkhFwELJm3ZbCoBIa/15n8G9bW1qyVJzEw16UM0xggSO
// SIG // MIIEigIBATCBlTB+MQswCQYDVQQGEwJVUzETMBEGA1UE
// SIG // CBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEe
// SIG // MBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSgw
// SIG // JgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBTaWduaW5nIFBD
// SIG // QSAyMDExAhMzAAABA14lHJkfox64AAAAAAEDMAkGBSsO
// SIG // AwIaBQCggaIwGQYJKoZIhvcNAQkDMQwGCisGAQQBgjcC
// SIG // AQQwHAYKKwYBBAGCNwIBCzEOMAwGCisGAQQBgjcCARUw
// SIG // IwYJKoZIhvcNAQkEMRYEFEFyaue59wObUwonK+nFKQT9
// SIG // 9RcRMEIGCisGAQQBgjcCAQwxNDAyoBSAEgBNAGkAYwBy
// SIG // AG8AcwBvAGYAdKEagBhodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20wDQYJKoZIhvcNAQEBBQAEggEAuky2HX7T/Pau
// SIG // +fZ9KlNe0bezb18euUNgQvu43GBQBqmzlVJPpxuVj4Qf
// SIG // DuJRyICQ1BqSJg3cKx0xZ1QvE3Q76QRKpSMRwbFKKWvL
// SIG // ZaUBZVop8ZqqYUC4WaoUzwQ5bB8bW28n0Ddkmv8DO9/r
// SIG // /HB0OGQXd37TxgQaX9+sMhaNvElwsjAlGVhns75a94WD
// SIG // YcQOwbvboMSDuUNBga4rGIue+sW398LOgIYvP1X+LNY3
// SIG // vU93sFrYufOXEyAaELPMIYS3Cctcqoz0cNCP5A5Hgi30
// SIG // zeoQrwNN8K3xC/YD0GPrKzqMb8v9be+AmBAqsIlbfMve
// SIG // CuBki/hITkpWfA1NMfvtd6GCAigwggIkBgkqhkiG9w0B
// SIG // CQYxggIVMIICEQIBATCBjjB3MQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVk
// SIG // bW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBvcmF0
// SIG // aW9uMSEwHwYDVQQDExhNaWNyb3NvZnQgVGltZS1TdGFt
// SIG // cCBQQ0ECEzMAAAESUd3i98tFHyUAAAAAARIwCQYFKw4D
// SIG // AhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEw
// SIG // HAYJKoZIhvcNAQkFMQ8XDTE4MTAxNjAzMDkzNVowIwYJ
// SIG // KoZIhvcNAQkEMRYEFP9ANZTtskHQbAol6urROD2sg6FY
// SIG // MA0GCSqGSIb3DQEBBQUABIIBADN3cfPHvo7eW/AnPEc3
// SIG // 4O0psfXUmALCok9VDnZlRgMDZNokriLp6Wz0RGz0ab4M
// SIG // gv/yoU2vfzSoQ2rR1dVgk9hhXL4gDOYmk/hRgoF/EmIW
// SIG // g6+JPqxP1ACQtzx0cE9JkJzTj9JueEslkkUj8xWPuaZQ
// SIG // IKT9f8WSYfpg2fvAPMRA0MqfznEbK2ks53ytaoprTsPQ
// SIG // +X68J2xR/h3ocFfevrf94Y43+WUVV413t3ksraVqknAJ
// SIG // 8w6LMWBD/co5cGZFgnxLoibPXkj5cLHkuGpssEv1vvYT
// SIG // +Mw73LpmD/BjdDOXBUozAZHxtl+sk6asBhQgzGyIfAJ1
// SIG // wfjjuy+iX2MZ2HM=
// SIG // End signature block
