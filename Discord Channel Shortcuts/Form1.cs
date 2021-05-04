using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Diagnostics;
using IWshRuntimeLibrary;
using System.IO;
using Microsoft.VisualBasic;

namespace Discord_Channel_Shortcuts
{
    public partial class Form1 : Form
    {
        private void MakeShortcut(long server, long channel, string channelName)
        {
            string desktop = Environment.GetFolderPath(Environment.SpecialFolder.DesktopDirectory);
            using (StreamWriter writer = new StreamWriter(desktop + "\\" + channelName + ".url"))
            {
                writer.WriteLine("[InternetShortcut]");
                writer.WriteLine("URL=discord://discordapp.com/channels/" + server + "/" + channel);
                writer.Flush();
            }
        }

        public Form1()
        {
            InitializeComponent();  
        }

        private void start_Click(object sender, EventArgs e)
        {
            MakeShortcut(Convert.ToInt64(Interaction.InputBox("Server ID:", "Shortcut Maker (1/3)", "", 100, 100)), Convert.ToInt64(Interaction.InputBox("Channel ID:", "Shortcut Maker (2/3)", "", 100, 100)), Convert.ToString(Interaction.InputBox("Shortcut Name:", "Shortcut Maker (3/3)", "", 100, 100)));
            Close();
        }

        private void findIDs_Click(object sender, EventArgs e)
        {
            Process.Start("https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID");
        }
    }
}
